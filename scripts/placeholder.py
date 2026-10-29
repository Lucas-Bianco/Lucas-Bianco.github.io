"""Make a labeled placeholder photo that Lucas will replace with a real one.

Usage: python scripts/placeholder.py <out.jpg> "<what photo goes here>" [WIDTHxHEIGHT]
Example: python scripts/placeholder.py src/assets/photos/robotics/vex-worlds.jpg "VEX Worlds, team at the field" 1600x1000

Replace the file later with a real photo of the same name; nothing else needs to change.
"""
import sys, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

out, label = sys.argv[1], sys.argv[2]
w, h = (int(v) for v in (sys.argv[3] if len(sys.argv) > 3 else '1600x1000').split('x'))

img = Image.new('RGB', (w, h), '#2e3538')
d = ImageDraw.Draw(img)

# faint drafting grid
step = max(w, h) // 24
for x in range(0, w, step):
    d.line([(x, 0), (x, h)], fill='#353d40')
for y in range(0, h, step):
    d.line([(0, y), (w, y)], fill='#353d40')

big = ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf', max(28, w // 28))
small = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', max(18, w // 60))
lines = textwrap.wrap(label, width=32)
y = h // 2 - len(lines) * big.size // 2
for line in lines:
    d.text((w // 2, y), line, font=big, fill='#e8ecea', anchor='mm')
    y += int(big.size * 1.25)
d.text((w // 2, y + small.size), 'photo placeholder: replace this file', font=small, fill='#8ea2ff', anchor='mm')

Path(out).parent.mkdir(parents=True, exist_ok=True)
img.save(out, quality=82)
print('made', out)
