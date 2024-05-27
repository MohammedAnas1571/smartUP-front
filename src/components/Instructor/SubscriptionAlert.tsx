import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,

  DialogFooter,
 

} from "@/components/ui/dialog"
import { Link } from "react-router-dom";

const SubscriptionAlert = ({subscribed}:{subscribed:boolean} ) => {
  return (
    <div>

<Dialog  open={subscribed} >
      
      <DialogContent className="sm:max-w-[425px]">
        
         <div>
           <p className="text-lg font-bold">Please subscribe</p>  
             </div>
        <DialogFooter>
        <Link to="/instructor/subscription">
          <Button >Add Subscription</Button></Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
 

    </div>
  )
}

export default SubscriptionAlert