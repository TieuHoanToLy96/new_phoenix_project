export const getPathnameWithoutSlash = pathname => {
  if (typeof pathname === "string") {
    if (pathname[pathname.length - 1] === "/") return pathname.slice(0, pathname.length - 1)
    return pathname
  }
  throw new TypeError("Type of its argument is not valid")
}