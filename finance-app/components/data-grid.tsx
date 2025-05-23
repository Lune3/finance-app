"use client";
import { useSearchParams } from "next/navigation";
import { formateDateRange } from "@/lib/utils";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import {FaPiggyBank} from "react-icons/fa";
import {FaArrowTrendUp,FaArrowTrendDown} from "react-icons/fa6"
import { DataCard } from "./data-card";


export const DataGrid = () => {
    const {data} = useGetSummary();
    const params = useSearchParams();
    const to = params.get("to") || undefined;
    const from = params.get("from") || undefined;

    const dateRangeLabel = formateDateRange({to,from});

    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
            <DataCard
                title="Remaining"
                value={data?.remainingAmount}
                percentageChange={data?.remainingChange}
                icon={FaPiggyBank}
                dateRange={dateRangeLabel}
            />
            <DataCard
                title="Income"
                value={data?.incomeAmount}
                percentageChange={data?.incomeChange}
                icon={FaArrowTrendUp}
                dateRange={dateRangeLabel}
            />
            <DataCard
                title="Expenses"
                value={data?.expenseAmount}
                percentageChange={data?.expenseChange}
                icon={FaArrowTrendDown}
                dateRange={dateRangeLabel}
            />
        </div>
    )
}