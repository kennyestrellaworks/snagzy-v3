import {
  ChartColumnStacked,
  ChartNoAccessCombined,
  FaRegHeart,
  FileStack,
  Package,
  Settings,
  ShoppingBag,
  SquareGantt,
  Star,
  User,
  Users,
  UserStar,
} from "../components/SVG";

export const userLevelNavlinks = [
  { icon: ShoppingBag, label: "Profile", link: "", type: "user-level" },
  {
    icon: SquareGantt,
    label: "Conversations",
    link: "user-conversations",
    type: "user-level",
  },
  { icon: User, label: "Orders", link: "user-orders", type: "user-level" },
  {
    icon: FaRegHeart,
    label: "Wishlist",
    link: "user-wishlist",
    type: "user-level",
  },
  { icon: Star, label: "Reviews", link: "user-reviews", type: "user-level" },
  {
    icon: Settings,
    label: "Settings",
    link: "user-settings",
    type: "user-level",
  },
];

export const sidebarNavLinks = [
  {
    icon: ChartNoAccessCombined,
    label: "Analytics",
    link: "",
    type: "sidebar-level",
  },
  {
    icon: ShoppingBag,
    label: "Products",
    link: "products",
    type: "sidebar-level",
  },
  {
    icon: SquareGantt,
    label: "Inventory",
    link: "inventory",
    type: "sidebar-level",
  },
  { icon: Users, label: "Users", link: "users", type: "sidebar-level" },
  { icon: Package, label: "Orders", link: "orders", type: "sidebar-level" },
  { icon: Star, label: "Reviews", link: "reviews", type: "sidebar-level" },
  // { icon: LuPalette, label: "Study", link: "filter-study" },
];

export const productLayoutNavLinks = [
  {
    icon: ChartColumnStacked,
    label: "Variants",
    link: "",
    type: "products-level",
  },
  {
    icon: UserStar,
    label: "Reviews",
    link: "reviews",
    type: "products-level",
  },
  { icon: FileStack, label: "Orders", link: "orders", type: "products-level" },
];
