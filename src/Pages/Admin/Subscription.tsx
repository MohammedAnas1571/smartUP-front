import AddingSubscription from "@/components/Admin/AddingSubscription";
import DeleteModal from "@/components/Admin/DeleteModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

export type SubscriptionDetails = {
  _id: string;
  planName: string;
  courseLimit: number;
  billingPeriod: string;
  price: number;
  description: string;
};

const Subscription = () => {
  const [subscriptions, setSubscription] = useState<
    SubscriptionDetails[] | null
  >([]);
  const [select,setSelect] = useState({id:"",isOpen:false})
  const [change, setChange] = useState(false);
  const fetchSubscription = async () => {
    try {
      const { data } = await axios.get("/auth/admin/subscription");
      setSubscription(data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };
  
  const handleDelete = async (subscriptionId: string) => {
    setSelect({id:subscriptionId,isOpen:true})
  }
   const handlesubscriptionDelete = async()=>{
    try {
     const{data} =  await axios.delete(`/auth/admin/subscription/${select.id}`);
     setSubscription(data)
     setSelect({id:"",isOpen:false});
      toast.success("Subscription deleted successfully");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };
  useEffect(() => {
    fetchSubscription();
  }, []);

  return (
    <div>
      <div className="my-5 mx-5 flex justify-end ">
        {change && (
          <AddingSubscription
            change={change}
            setChange={setChange}
            setSubscription={setSubscription}
          />
        )}
          {select.isOpen && ( <DeleteModal handleDelete ={handlesubscriptionDelete}  setSelect={setSelect} />)}
        <button
          onClick={() => setChange(true)}
          className="bg-indigo-700 rounded-lg p-3 text-white font-medium "
        >
          + Create Subscription
        </button>
      </div>
      <table className="min-w-full divide-y ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">
              No
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">
              planname
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">
              BillingPeriod
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium  uppercase ">
              price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {subscriptions &&
            subscriptions.map((subscription, index) => (
              <tr key={subscription._id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}.</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {subscription.planName}
                </td>
                <td className="px-6 py-4 break-before-auto">
                  {subscription.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {subscription.billingPeriod}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  {subscription.price}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(subscription._id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscription;
