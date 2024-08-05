// DashBoard.tsx
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import MonthlySalesChart,{ MonthlySales } from "./MontlySalesChart";
import { useEffect, useState } from "react";
import handleApiError from "@/Error Handler/ApiErrorHandler";



interface DailyRevenue {
  dailyRevenue: number;
}

interface MonthlyRevenue {
  monthlyRevenue: number;
}

interface YearlyRevenue {
  yearlyIncome: number;
}

interface LifeTimeRevenue {
  totalAmount: number;
}


const DashBoard: React.FC = () => {
  const [daily, setDaily] = useState<DailyRevenue[]>([]);
  const [monthly, setMonthly] = useState<MonthlyRevenue[]>([]);
  const [yearly, setYearly] = useState<YearlyRevenue[]>([]);
  const [lifeTime, setLifeTime] = useState<LifeTimeRevenue[]>([]);
  const [monthlyReport, setMonthlyReport] = useState<MonthlySales[]>([]);
 

  const fetchSalesData = async () => {
    try {
      const { data } = await axios.get("/auth/admin/dashboard");
      setDaily(data.daily);
      setMonthly(data.monthly);
      setYearly(data.yearly);
      setLifeTime(data.lifeTime);
      setMonthlyReport(data.monthReport);
      
    } catch (err) {
      handleApiError(err);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <div className="px-5 py-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lifeTime.length > 0 ? lifeTime[0].totalAmount : ""}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{daily.length > 0 ? daily[0].dailyRevenue : "0"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monthly.length > 0 ? monthly[0].monthlyRevenue : ""}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yearly Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{yearly.length > 0 ? yearly[0].yearlyIncome : ""}</div>
          </CardContent>
        </Card>
      </div>
    
      <MonthlySalesChart monthlyReport={monthlyReport} />
      
      
    </div>
  );
};

export default DashBoard;
