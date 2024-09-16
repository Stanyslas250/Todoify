import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useCategory } from "./useCategory";
import { useAccount } from "./useAccount";

export const useProjectCategories = () => {
  const { fetchCategories, setCategoriesColor, categoriesWithColor } =
    useCategory();
  const { token, account } = useAccount();

  const { data, isFetching } = useQuery({
    queryKey: ["categories", account.username],
    queryFn: async () => await fetchCategories(token),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (data) {
      setCategoriesColor(data);
    }
  }, [data, setCategoriesColor]);

  return { categoriesWithColor, isFetching };
};
