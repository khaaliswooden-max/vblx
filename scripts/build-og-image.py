"""Generate the 1200x630 Open Graph social share image from the brand logo."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "visionblox-logo.png"
OUT = ROOT / "public" / "og-image.png"

NAVY = (35, 45, 90)
W, H = 1200, 630

canvas = Image.new("RGB", (W, H), NAVY)
logo = Image.open(LOGO).convert("RGBA")

max_w, max_h = 820, 420
scale = min(max_w / logo.width, max_h / logo.height)
new_size = (int(logo.width * scale), int(logo.height * scale))
logo = logo.resize(new_size, Image.LANCZOS)

x = (W - logo.width) // 2
y = (H - logo.height) // 2
canvas.paste(logo, (x, y), logo)
canvas.save(OUT, "PNG", optimize=True)
print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")
