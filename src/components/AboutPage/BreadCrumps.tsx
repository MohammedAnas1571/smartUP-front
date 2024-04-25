import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
type Detailscatagory = {
  catagory: { name: string };
  tags: string;
};

const BreadCrumps = ({ catagory, tags }: Detailscatagory) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-indigo-700 font-bold text-md">
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-indigo-700 font-bold text-md">
            {catagory.name}
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-indigo-700 font-bold text-md">
            {tags}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumps;
