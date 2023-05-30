import { useRouter } from "next/router";

type RoutePathPros = {
  [key: string]: string;
};

export default function RoutePath() {
  const router = useRouter();

  const page: RoutePathPros = {
    "/": "Home",
    "/about": "About",
    "/movies/[id]": `${router.query.title}`
  };

  const selectRoute = page[router.pathname];

  return selectRoute;
}
