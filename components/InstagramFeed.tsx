import Image from "next/image";

const FEED_URL = "https://feeds.behold.so/yPJs10LmxSFNWSHnBnZy";
const PROFILE_URL = "https://www.instagram.com/spivak";
const TILE_COUNT = 6;
const MIN_LIVE_POSTS = 3;

// Curated local photography. Shown whenever the live feed is unreachable,
// answers with an error, or yields too few usable posts to fill the row.
const fallbackTiles: Tile[] = [
  { src: "/images/speaking-stage.jpg", alt: "Aaron Spivak on stage", href: PROFILE_URL, local: true },
  { src: "/images/run.jpg", alt: "Aaron Spivak leading a sunrise run", href: PROFILE_URL, local: true },
  { src: "/images/founders-club.jpg", alt: "Aaron Spivak with Founders Club members", href: PROFILE_URL, local: true },
  { src: "/images/hush.jpg", alt: "Aaron Spivak in Hush gear", href: PROFILE_URL, local: true },
  { src: "/images/revitasize.jpg", alt: "Aaron Spivak in the Revitasize juice-kitchen days", href: PROFILE_URL, local: true },
  { src: "/images/podcast-couch.jpg", alt: "Aaron Spivak recording the podcast", href: PROFILE_URL, local: true },
];

type Tile = {
  src: string;
  alt: string;
  href: string;
  local: boolean;
};

type Post = Record<string, unknown>;

function str(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function nested(post: Post, key: string, inner: string): string | null {
  const group = post[key];
  if (!group || typeof group !== "object") return null;
  const entry = (group as Record<string, unknown>)[inner];
  if (!entry || typeof entry !== "object") return null;
  const record = entry as Record<string, unknown>;
  return str(record.mediaUrl) ?? str(record.media_url) ?? str(record.url) ?? str(record.src);
}

// Behold uses camelCase and also exposes a sizes object, while the raw
// Instagram Graph API uses snake_case. Accept every shape rather than
// betting on one, and prefer a video thumbnail over a video file.
function pickImage(post: Post): string | null {
  const type = (str(post.mediaType) ?? str(post.media_type) ?? "").toUpperCase();
  const thumbnail = str(post.thumbnailUrl) ?? str(post.thumbnail_url);
  const sized =
    nested(post, "sizes", "medium") ??
    nested(post, "sizes", "large") ??
    nested(post, "sizes", "small") ??
    nested(post, "sizes", "full");
  const media = str(post.mediaUrl) ?? str(post.media_url);

  if (type === "VIDEO" || type === "REELS") {
    return thumbnail ?? sized ?? null;
  }
  return sized ?? media ?? thumbnail ?? null;
}

function pickAlt(post: Post): string {
  const caption = str(post.prunedCaption) ?? str(post.caption);
  if (!caption) return "Instagram post by Aaron Spivak";
  const words = caption.replace(/\s+/g, " ").split(" ").slice(0, 8).join(" ");
  return words.length < caption.length ? `${words}...` : words;
}

function toPosts(payload: unknown): Post[] {
  if (Array.isArray(payload)) return payload as Post[];
  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    for (const key of ["posts", "data", "media", "items"]) {
      if (Array.isArray(record[key])) return record[key] as Post[];
    }
  }
  return [];
}

async function loadTiles(): Promise<Tile[] | null> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn(`[InstagramFeed] feed responded ${res.status}, using fallback tiles`);
      return null;
    }
    const posts = toPosts(await res.json());
    const tiles: Tile[] = [];
    for (const post of posts) {
      const src = pickImage(post);
      if (!src) continue;
      tiles.push({
        src,
        alt: pickAlt(post),
        href: str(post.permalink) ?? str(post.url) ?? PROFILE_URL,
        local: false,
      });
      if (tiles.length === TILE_COUNT) break;
    }
    console.log(
      `[InstagramFeed] feed returned ${posts.length} posts, ${tiles.length} usable`,
    );
    return tiles.length >= MIN_LIVE_POSTS ? tiles : null;
  } catch (err) {
    console.warn(
      `[InstagramFeed] feed unreachable (${err instanceof Error ? err.message : "unknown error"}), using fallback tiles`,
    );
    return null;
  }
}

export default async function InstagramFeed() {
  const tiles = (await loadTiles()) ?? fallbackTiles;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {tiles.map((tile, i) => (
        <a
          key={`${tile.src}-${i}`}
          href={tile.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden"
        >
          {tile.local ? (
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          )}
        </a>
      ))}
    </div>
  );
}
