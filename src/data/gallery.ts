// Gallery photos. Order here = order on the page.
// To swap a placeholder: drop the real photo in with the same filename and set placeholder: false.
import type { ImageMetadata } from 'astro'

import hxTeam from '../assets/photos/hexaflow/home-1.jpg'
import hxDomeRender from '../assets/photos/hexaflow/geometry-2.jpg'
import hxDomeTop from '../assets/photos/hexaflow/project-15.jpg'
import hxDyeWide from '../assets/photos/hexaflow/drop-test-2.jpg'
import hxDyeClose from '../assets/photos/hexaflow/drop-test-1.jpg'
import hxCaliper from '../assets/photos/hexaflow/drop-test-3.jpg'
import hxAssemblyDwg from '../assets/photos/hexaflow/cad-1.jpg'
import hxExploded from '../assets/photos/hexaflow/enclosure-1.jpg'
import hxFrame from '../assets/photos/hexaflow/cad-7.jpg'
import hxAssembled from '../assets/photos/hexaflow/project-2.jpg'
import hxPcbPi from '../assets/photos/hexaflow/project-6.jpg'
import hxPcbBare from '../assets/photos/hexaflow/project-7.jpg'
import hxCamera from '../assets/photos/hexaflow/cad-9.jpg'
import hxTrials from '../assets/photos/hexaflow/substrate-7.jpg'
import hxPebbles from '../assets/photos/hexaflow/substrate-6.jpg'
import hxRockwool from '../assets/photos/hexaflow/cad-22.jpg'

import vexRobot from '../assets/photos/gallery/vex-3236a-robot.jpg'
import vexWorlds from '../assets/photos/gallery/vex-worlds-middle-school.jpg'
import frcLebron from '../assets/photos/gallery/frc-lebron-bot.jpg'
import frcBoard from '../assets/photos/gallery/frc-whiteboard.jpg'
import printGridfinity from '../assets/photos/gallery/print-gridfinity.jpg'
import printSkadis from '../assets/photos/gallery/print-skadis.jpg'
import printAms from '../assets/photos/gallery/print-ams.jpg'
import lifeFreekicks from '../assets/photos/gallery/life-freekicks.jpg'
import lifeTrack from '../assets/photos/gallery/life-track.jpg'

export type GalleryCategory = 'robotics' | 'hexaflow' | 'cad' | 'prints' | 'life'

export interface GalleryPhoto {
  src: ImageMetadata
  alt: string
  caption: string
  category: GalleryCategory
  placeholder?: boolean
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'hexaflow', label: 'HexaFlow' },
  { id: 'cad', label: 'CAD' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'prints', label: '3D prints' },
  { id: 'life', label: 'Life' },
]

export const gallery: GalleryPhoto[] = [
  {
    src: hxTeam,
    alt: 'Five HexaFlow team members in matching black jackets standing in front of their display at a busy exhibit hall',
    caption: 'The HexaFlow team at our display, February 2026.',
    category: 'hexaflow',
  },
  {
    src: hxDomeRender,
    alt: 'CAD render looking down on a square block with a shallow dome covered in a hexagonal groove pattern',
    caption: 'The grooved dome in CAD. The hex channels are what move the water by capillary action.',
    category: 'cad',
  },
  {
    src: hxDyeWide,
    alt: 'Printed light blue dome with hexagonal grooves, a spot of purple dyed water sitting in the channels',
    caption: 'Dyed water on a printed dome, checking which way the grooves pull it.',
    category: 'hexaflow',
  },
  {
    src: hxCaliper,
    alt: 'Digital caliper jaws spanning a grooved dome with blue dyed water spreading through the hex channels',
    caption: 'Measuring the dome with calipers while blue dye spreads through the channels.',
    category: 'hexaflow',
  },
  {
    src: hxAssemblyDwg,
    alt: 'SolidWorks drawing sheet of the HexaFlow V2 assembly with an exploded view, balloon numbers and a 15 line parts list',
    caption: 'HexaFlow V2 assembly drawing, sheet G0000, with the full parts list.',
    category: 'cad',
  },
  {
    src: hxExploded,
    alt: 'Exploded render of the black enclosure with red callouts for the tabbed front door, shelf design, and embedded cable channels',
    caption: 'Exploded enclosure render with callouts: tabbed door, swappable shelves, hidden cable channels.',
    category: 'cad',
  },
  {
    src: hxDomeTop,
    alt: 'Top view of a dark gray printed dome block with hex grooves and brass heat-set inserts in each corner',
    caption: 'A printed dome top with brass heat-set inserts in the corners.',
    category: 'hexaflow',
  },
  {
    src: hxDyeClose,
    alt: 'Close view of purple dyed water pooled inside the hexagonal grooves of a light blue printed dome',
    caption: 'Close up of the dye sitting in the grooves.',
    category: 'hexaflow',
  },
  {
    src: hxFrame,
    alt: 'Dark gray 3D printed frame with open shelf levels and the hex dome mounted on top',
    caption: 'The printed frame with the dome on top and open shelves for electronics.',
    category: 'hexaflow',
  },
  {
    src: hxAssembled,
    alt: 'Assembled HexaFlow unit with frosted side panels, wiring and a circuit board visible inside, power cable on top',
    caption: 'Assembled unit with the electronics wired in.',
    category: 'hexaflow',
  },
  {
    src: hxPcbPi,
    alt: 'Hand holding a green custom circuit board with four USB ports and a Raspberry Pi Zero 2 W mounted on top',
    caption: 'Our custom board with a Raspberry Pi Zero 2 W on top and four USB ports.',
    category: 'hexaflow',
  },
  {
    src: hxPcbBare,
    alt: 'Bare green circuit board with a hexagon pattern on the silkscreen, sitting on a desk lit purple',
    caption: 'The board before parts went on, with the hex logo on the silkscreen.',
    category: 'hexaflow',
  },
  {
    src: hxCamera,
    alt: 'Small camera circuit board seated in a white 3D printed mounting plate',
    caption: 'Camera board test fitted in its printed mount.',
    category: 'hexaflow',
  },
  {
    src: hxTrials,
    alt: 'Two photos of a seed tray with different growing substrates in each cell, labeled October 20th and October 31st',
    caption: 'Substrate trials: the same tray on October 20 and October 31.',
    category: 'hexaflow',
  },
  {
    src: hxPebbles,
    alt: 'Hand holding the clear substrate holder full of clay pebbles behind a slotted grate, a small sprout poking through',
    caption: 'Clay pebbles behind the grate, with a sprout coming through.',
    category: 'hexaflow',
  },
  {
    src: hxRockwool,
    alt: 'Top view of rockwool packed in the clear substrate holder with a small sprout and a sensor wire',
    caption: 'Rockwool in the substrate holder with a seedling and a sensor wire.',
    category: 'hexaflow',
  },
  {
    src: vexRobot,
    alt: 'Placeholder for a photo of the VEX team 3236A robot',
    caption: 'Team 3236A robot, Push Back season.',
    category: 'robotics',
    placeholder: true,
  },
  {
    src: frcLebron,
    alt: 'Placeholder for a photo of the FRC warm-up basketball shooter robot',
    caption: 'The LeBron bot: our FRC warm-up build, a basketball shooter on a tank chassis.',
    category: 'robotics',
    placeholder: true,
  },
  {
    src: frcBoard,
    alt: 'Placeholder for a photo of the FRC team whiteboard',
    caption: 'Ideas go on the board with no names attached.',
    category: 'robotics',
    placeholder: true,
  },
  {
    src: vexWorlds,
    alt: 'Placeholder for a photo of the middle school VEX team at the World Championship',
    caption: 'My middle school VEX team at the World Championship.',
    category: 'robotics',
    placeholder: true,
  },
  {
    src: printGridfinity,
    alt: 'Placeholder for a photo of Gridfinity storage bins',
    caption: 'Gridfinity bins off the X2D.',
    category: 'prints',
    placeholder: true,
  },
  {
    src: printSkadis,
    alt: 'Placeholder for a photo of SKÅDIS pegboard fit tests',
    caption: 'SKÅDIS pegboard fit tests.',
    category: 'prints',
    placeholder: true,
  },
  {
    src: printAms,
    alt: 'Placeholder for a photo of the Bambu A1 printing with the AMS',
    caption: 'The A1 and AMS mid-print.',
    category: 'prints',
    placeholder: true,
  },
  {
    src: lifeFreekicks,
    alt: 'Placeholder for a photo of a FreeKicks Special Olympics soccer session',
    caption: 'FreeKicks Special Olympics soccer in Franklin.',
    category: 'life',
    placeholder: true,
  },
  {
    src: lifeTrack,
    alt: 'Placeholder for a photo from a track meet',
    caption: 'Track season.',
    category: 'life',
    placeholder: true,
  },
]
