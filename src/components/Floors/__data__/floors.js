import FirFloors from "../../../assets/floors/FirFloors.jpg";
import CharacterWhiteOak from "../../../assets/floors/CharacterWhiteOak.jpg";
import Eucalyptus from "../../../assets/floors/Eucalyptus.jpg";
import StainedRedOak from "../../../assets/floors/StainedRedOak.jpg";
import ScrapedWalnut from "../../../assets/floors/ScrapedWalnut.jpg";
import QtrWhiteOak from "../../../assets/floors/QtrWhiteOak1.jpg";
import BasketWeave from "../../../assets/floors/BasketWeave.jpg";
import WhiteOakWithHerringBone from "../../../assets/floors/WhiteOakWithHerringBone.jpg";
import FrenchKnot from "../../../assets/floors/FrenchKnot.jpg";
import LivesawnWhiteOak from "../../../assets/floors/LivesawnWhiteOak.jpg";
import Hickory from "../../../assets/floors/Hickory.jpg";
import BlackWalnut from "../../../assets/floors/BlackWalnut.jpg";

const floors = [
  {
    title: "Old VG Fir",
    src: FirFloors,
    description: "This is a very old, old Fir floor.  Huzzah.",
    listInfo: {
      species: "Vertical Grain Fir (100 years old)",
      finish: "3 coats of Swedish finish",
      location: "Seattle, Wa",
      additional:
        "There is nothing quite like old Fir floors.  This look can't be reproduced, you just have to be lucky enough to have them in your home.",
    },
  },
  {
    title: "Character Grade White Oak",
    src: CharacterWhiteOak,
    description: "This is a Character grade White Oak floor.  Huzzah.",
    listInfo: {
      species: "Character Grade White Oak",
      finish: "Factory finished urethane",
      location: "Seattle, Wa",
      additional:
        "This grade showcases the beauty of the White Oak, while letting all the character of the natural product shine through as well.",
    },
  },
  {
    title: "Basket Weave",
    src: BasketWeave,
    description:
      "This is a Select Red Oak floor finished with a custom stain.  The boards were installed in the entry in a basket weave pattern and inset with 12x12 limestone tiles. Huzzah.",
    listInfo: {
      species: "Select Red Oak with natural limestone",
      finish: "Custom stain with 3 coats of waterborne finish",
      location: "Seattle, Wa",
      additional:
        "A lot of work and care goes into the layout, the cutting and the installation of these floors.  The finished result is spectacular",
    },
  },
  {
    title: "Select White Oak with HerringBone",
    src: WhiteOakWithHerringBone,
    description:
      "This is a Select White Oak floor with a custom grey stain.  The entry was installed using a herring bone pattern.  Huzzah.",
    listInfo: {
      species: "Select White Oak",
      finish: "Custom stain with 3 coats of waterborne finish",
      location: "Seattle, Wa",
      additional:
        "The existing floors here were refinished, but we installed new wood in the entryway.  The owners decided to use a herring bone pattern to accent the space and keep in line with the original design.",
    },
  },
  {
    title: "French Knot",
    src: FrenchKnot,
    description: "This is a French Knot.  Huzzah.",
    listInfo: {
      species: "100% Quartersawn White Oak with Bubinga feature",
      finish: "Custom stain with 3 coats of Tung Oil",
      location: "Seattle, Wa",
      additional:
        "The boards for this herringbone were milled from standard flooring.  The feature strip for the border and french knots was custom milled onsite and fabricated to sit just proud of the White Oak.  The floors were all hand scraped and finished with a stain and Tung Oil finish.",
    },
  },
  {
    title: "Hand Scraped Walnut",
    src: ScrapedWalnut,
    description:
      "This is a 6 inch American Black Walnut floor.  It has been hand scraped and finished with a custom stain and a Tung Oil finish. Huzzah.",
    listInfo: {
      species: "American Black Walnut",
      finish: "Custom stain with 3 coats of Tung Oil finish",
      location: "Medina, Wa",
      additional:
        "These floors were finished using the same methods that have been used for centuries.  The entire process was done by hand, the scraping, sanding and application of the finish.  This produces a unique look that can only be produced by staying true to the original method.",
    },
  },
  {
    title: "Livesawn White Oak",
    src: LivesawnWhiteOak,
    description: "This is a beautiful White Oak floor.  Huzzah.",
    listInfo: {
      species: "Livesawn Wide Plank White Oak",
      finish: "Rubio Monocoat fuming with oil",
      location: "Bainbridge Island, Wa",
      additional:
        "These floors were finished using Rubio Monocoat fumed product and a custom mixed Rubio oil finish",
    },
  },
  {
    title: "Black Walnut",
    src: BlackWalnut,
    description: "This is a beautiful Walnut floor.  Huzzah.",
    listInfo: {
      species: "American Black Walnut",
      finish: "Custom stain with 3 coats of Tung Oil finish",
      location: "Mercer Island, Wa",
      additional:
        "These floors were finished 100% by hand using only scrapers and sandpaper.  The stain, and Tung Oil was also applied by hand.",
    },
  },
  {
    title: "Wide Plank Hickory",
    src: Hickory,
    description: "This is a beautiful Hickory floor.  Huzzah.",
    listInfo: {
      species: "Select Hickory",
      finish: "Custom stain with 3 coats of waterborne finish",
      location: "Bellevue, Wa",
      additional:
        "This wide plank solid Hickory floor was installed with fasteners as well as full trowel adhesive.  The stain was custom mixed onsite and all the floors were finished with 3 coats of waterborne finish",
    },
  },
  {
    title: "Red Oak With Stain",
    src: StainedRedOak,
    description: "This is a beautiful Stained Red Oak floor.  Huzzah.",
    listInfo: {
      species: "Select Red Oak",
      finish: "Custom stain with 3 coats of waterborne finish",
      location: "Seattle, Wa",
      additional:
        "Classic and timeless, Select Red Oak strip flooring with a warm brown stain and clear waterborne finish.",
    },
  },
  {
    title: "Strand Eucalyptus",
    src: Eucalyptus,
    description: "This is a pre finished strand Eucalyptus floor.  Huzzah.",
    listInfo: {
      species: "Strand Eucalyptus",
      finish: "Factory finished urethane",
      location: "Seattle, Wa",
      additional:
        "The Eucalyptus wood is compressed down to the size of a railroad tie, then sliced into pieces that become the floor boards.  The process results in an incredibly durable, and beautiful product",
    },
  },
  {
    title: "Rift and Quartered White Oak",
    src: QtrWhiteOak,
    description: "This is a rift and quartered White Oak floor.  Huzzah.",
    listInfo: {
      species: "Rift and Quartersawn White Oak",
      finish: "Rubio Monocoat",
      location: "Seattle, Wa",
      additional:
        "Rift and quartered White Oak is one of the most classic and timeless products for a wood floor.  These floors always look fabulous wether it's 50 years ago, present day, or 50 years into the future.",
    },
  },
];

export default floors;
