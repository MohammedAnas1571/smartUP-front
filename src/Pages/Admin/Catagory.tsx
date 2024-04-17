

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
 
  CardFooter,

} from "@/components/ui/card"


const Catagory = () => {
 
  return (
    <>
    <div className="my-5 mx-5 flex justify-end ">
       <button className="bg-teal-700 rounded-lg p-3 text-white font-medium ">+ Create Catagory</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 mt-7 px-4">
     
    <Card className="w-[400px]">
     
      <CardContent className="mt-5">
        <form>
          <div className=" w-full items-center ">
            <h1>catagory name</h1>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end space-x-3">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}

export default Catagory