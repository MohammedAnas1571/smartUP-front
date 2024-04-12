import {
    AlertDialog,
  
    AlertDialogContent,
    AlertDialogDescription,
  
    AlertDialogHeader,
    AlertDialogTitle,

  } from "@/components/ui/alert-dialog"

const Alert = ({email}:{email:string}) => {
  return (
    <AlertDialog defaultOpen={true}> 
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Check Your Registed Email {email} </AlertDialogTitle>
          <AlertDialogDescription className="text-green-700 font-semibold">
             Link is shared to  your email please open you mail 
          </AlertDialogDescription>
        </AlertDialogHeader>
     
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Alert



