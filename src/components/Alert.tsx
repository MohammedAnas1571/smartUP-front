import {
    AlertDialog,
  
    AlertDialogContent,
    AlertDialogDescription,
  
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

const Alert = () => {
  return (
    <AlertDialog defaultOpen={true}> 
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Check Your Registed Email</AlertDialogTitle>
          <AlertDialogDescription className="text-green-700 font-semibold">
             Link is shared to  your email please open you mail 
          </AlertDialogDescription>
        </AlertDialogHeader>
     
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Alert



