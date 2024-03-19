import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

const Alert = () => {
  return (
    <AlertDialog defaultOpen={true}> 
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-green-700 font-semibold">
             Link is shared to  your email please open you mail 
          </AlertDialogDescription>
        </AlertDialogHeader>
     
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Alert



