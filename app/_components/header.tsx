import Image from "next/image";
import { Card, CardContent } from "./ui/card";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

//sfc
const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
