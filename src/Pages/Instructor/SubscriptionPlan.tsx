import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
type SubscriptionDetails = {
  planName: string;
  price: number;
  description: string;
  billingPeriod:string;
  _id:string;
  
};

const Subscription = () => {
  const [subscriptions, setSubscription] = useState<SubscriptionDetails[]>([]);

  const fetchSubscription = async () => {
    try {
      const response = await axios.get("/auth/tutor/subscription");
      setSubscription(response.data.subscriptions);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const hanldeSubcription = async (subscription:SubscriptionDetails)=>{
    try{
     const {data} = await  axios.post("/auth/tutor/payment",{subscription})
     if (data.url) {
      window.location.href = data.url;
    }
  }catch(err){
      console.log("error in payment gateway")
    }

  }
  return (
    <div className="flex min-h-screen pt-[30px] px-[40px]">
      <div className="min-w-full">
        <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
        {subscriptions.map((subscription, index) => (
          <div key={index} className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  {subscription.planName}
                </p>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">₹{subscription.price}</p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                 {subscription.billingPeriod}
                </p>
               
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
             <div>{subscription.description}</div>

              <div className="mt-[25px]">
                <button onClick={()=>hanldeSubcription(subscription)} className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">
                   Subscribe
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
