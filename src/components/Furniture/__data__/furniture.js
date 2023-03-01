import Castle from "../../../assets/furniture/Castle.jpg";
import EndTables from "../../../assets/furniture/EndTables.jpg";
import HauntedMansion from "../../../assets/furniture/HauntedMansion.jpg";
import Humidor from "../../../assets/furniture/Humidor.jpg";
import Hutch from "../../../assets/furniture/Hutch.jpg";
import Mickey from "../../../assets/furniture/Mickey.jpg";
import NightmareHill from "../../../assets/furniture/NightmareHill.jpg";
import RobloxShelf from "../../../assets/furniture/RobloxShelf.jpg";
import StationTables from "../../../assets/furniture/StationTables.jpg";
import TheStation from "../../../assets/furniture/TheStation.jpg";
import UmamiTable from "../../../assets/furniture/UmamiTable.jpg";
import WalnutBox from "../../../assets/furniture/WalnutBox.jpg";
import WalnutTable from "../../../assets/furniture/WalnutTable.jpg";
import Dovetail from "../../../assets/furniture/Dovetail.jpg";
import WalnutShelf from "../../../assets/furniture/WalnutShelf.jpg";
import Closet from "../../../assets/furniture/Closet.jpg";

const furniture = [
  {
    title: "Mid Century Modern End Tables",
    src: EndTables,
    description: "Mid Century Modern",
    listInfo: {
      species: "Select White Oak",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "These pieces were made out of Select White Oak and finished with clear, Pure Rubio Monocoat finish.",
    },
  },
  {
    title: "M-I-C-K-E-Y",
    src: Mickey,
    description: "Brazilian Cherry Display Shelf",
    listInfo: {
      species: "Jatoba / Brazilian Cherry w/Poplar",
      finish: "Rubio Monocoat Charcoal",
      location: "Seattle, Wa",
      additional:
        "This shelf was made entirely out of scraps left over from a different project.",
    },
  },
  {
    title: "Craftsman Style Walnut Dining Table",
    src: WalnutTable,
    description: "Craftsman Style Dining Table",
    listInfo: {
      species: "American Black Walnut",
      finish: "3 coats of Tung Oil finish",
      location: "Bothell, Wa",
      additional:
        "This craftsman style table was built out of rough lumber we milled in our shop.  It is expandable with a removable table leaf which was grain matched for continuity.  The table was finished with classic Tung Oil finish.",
    },
  },
  {
    title: "What's This!",
    src: NightmareHill,
    description: "Bent Lamination Wall Shelf",
    listInfo: {
      species: "A bit of everything",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "This piece was painstingly built using nothing but scraps found in our shop. Over 600 pieces needed to be individually cut.  Assembly was completed in 6 different stages to allow for the bends to set.  The piece was finished with a clear, Pure Rubio Monocoat finish.  Some of the species used include Purpleheart, Jatoba, Wenge, Douglas Fir, Maple and Bubinga to name a few.",
    },
  },
  {
    title: "Coffee Shop Counter",
    src: TheStation,
    description: "Coffee Shop Counter",
    listInfo: {
      species: "Reclaimed wood - mixed species",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "The wood for this project all came from old timbers.  The faces were left unsanded to preserve their beauty. What is left, is the naturally aged patina of each board.",
    },
  },
  {
    title: "When You Wish...",
    src: Castle,
    description: "Pop Culture Display Shelf",
    listInfo: {
      species: "Quartersawn Khaya",
      finish: "Rubio Monocoat Black",
      location: "Seattle, Wa",
      additional:
        "This piece was made using quartered Khaya and assembled into a large blank.  Then, the castle design was cut from the solid piece.",
    },
  },
  {
    title: "Classic Humidor",
    src: Humidor,
    description: "Classic Humidor",
    listInfo: {
      species: "American Black Walnut",
      finish: "3 coats of Tung Oil finish",
      location: "Seattle, Wa",
      additional:
        "This is another piece that was made from scraps leftover from a previous project.  The wood was so beautiful I couldn't throw it away.  The Spanish Cedar for the liner was sourced locally.",
    },
  },
  {
    title: "Corner Hutch",
    src: Hutch,
    description: "Corner Hutch",
    listInfo: {
      species: "Select White Oak",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "This piece was made using Select White Oak lumber and finished with clear, Pure Rubio Monocoat finish.  It could be used to store anything, but classic LPs and an electric guitar seemed like a good choice.",
    },
  },
  {
    title: "Bakery Prep Table",
    src: UmamiTable,
    description: "Custom Bakery Prep Table",
    listInfo: {
      species: "Maple, Walnut, Padouk",
      finish: "Rubio Monocoat Pure",
      location: "Rainier Beach, Wa",
      additional:
        "These tables were custom built for a local bakery.  The mixed species assembly provided a vibrant color and design for the space.",
    },
  },
  {
    title: "Custom Treasure Box",
    src: WalnutBox,
    description: "Box For Treasures",
    listInfo: {
      species: "American Black Walnut and Curly Western Maple",
      finish: "3 coats of Tung Oil finish",
      location: "Bothell, Wa",
      additional:
        "This piece was made out of the scraps left over from a dining table that was built in our shop.  I had been looking for something to use the Curly Maple on, this was a perfect fit.",
    },
  },
  {
    title: "Welcome, Foolish Mortals",
    src: HauntedMansion,
    description: "Scaled Model Display Shelf",
    listInfo: {
      species: "Select Red Oak",
      finish: "Rubio Monocoat Black",
      location: "Seattle, Wa",
      additional:
        "This piece was made to be a wall mounted shelf.  It is based on the Haunted Mansion attraction in Disneyland, Ca.  The front column assembly is removable to allow access to store selected items.",
    },
  },
  {
    title: "Display Shelf With Drawers",
    src: RobloxShelf,
    description: "Custom Shelf w/Drawers",
    listInfo: {
      species: "Select White Oak",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "This piece was made for a child's room and is meant to serve as a bookshelf, display case, and set of drawers for added storage.",
    },
  },
  {
    title: "Industrial Coffee Shop Tables",
    src: StationTables,
    description: "Industrial Coffee Tables",
    listInfo: {
      species: "Reclaimed wood - mixed species",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "These tables were made to go with the counter cabinet built for a local coffee shop.  The bases were all made with iron pipes and fittings.  The end result is warm, yet also industrial.",
    },
  },
  {
    title: "Inlaid Dovetail Drawer",
    src: Dovetail,
    description: "Inlaid Dovetail Drawer",
    listInfo: {
      species: "Ebony and Quartered Khaya",
      finish: "Custom stain with 3 coats of Tung Oil finish",
      location: "Seattle, Wa",
      additional:
        "This was from a set of drawers that went to a hutch/bookshelf.  The drawer boxes were made from custom milled Quartersawn Khaya and the dovetails were inlaid with Ebony.",
    },
  },
  {
    title: "Walnut Display Shelf",
    src: WalnutShelf,
    description: "Walnut Craftsman Style Shelf",
    listInfo: {
      species: "American Black Walnut",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "This display shelf was built to display a collection.  The collection could be action figures, vinyl records, books, or anything else that can fit on the shelves.",
    },
  },
  {
    title: "Custom Built In Closet",
    src: Closet,
    description: "Custom Built In Closet",
    listInfo: {
      species: "Select White Oak",
      finish: "Rubio Monocoat Pure",
      location: "Seattle, Wa",
      additional:
        "This closet system was made from Select White Oak and Maple lumber.  This was custom built to fit an existing attic walk in closet and the design was meant to maximize the space, and shape of the closet.  All the drawers had soft close hardware included.",
    },
  },
];

export default furniture;
