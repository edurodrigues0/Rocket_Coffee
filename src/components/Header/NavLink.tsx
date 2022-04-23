import { Link, LinkProps, Text, useBreakpointValue } from "@chakra-ui/react";
import { useMatch, useResolvedPath } from "react-router-dom";

interface NavLinkProps extends LinkProps {
  href: string;
  title: string;
}

export function NavLink({ title, href, ...rest }: NavLinkProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  let resolved = useResolvedPath(href);
  let match = useMatch({ path: resolved.pathname, end: true });

  return isWideVersion ? (
    <Link
      fontSize="0.87rem"
      fontWeight={500}
      href={href}
      {...rest}
    >
      {title}
    </Link>
  ) : (
    <Link
      fontSize="0.87rem"
      fontWeight={500}
      href={href}
      paddingY="2rem"
      display="flex"
      alignItems="center"
      borderLeftWidth="5px"
      borderColor={match ? "button" : "#000"}
      {...rest}
    >
      <Text w="100vw" ml="4rem">
        {title}
      </Text>
    </Link>
  );
}
