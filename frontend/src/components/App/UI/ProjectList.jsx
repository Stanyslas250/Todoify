import { LuFolderOpen } from "react-icons/lu";
import { colorUtils } from "../../../utils/colorUtils";
import { useCategory } from "../../../hooks/useCategory";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "../../../hooks/useAccount";
import { useEffect } from "react";

export default function ProjectList() {
  const { categories, fetchCategories, setCategories } = useCategory();
  const { token, account } = useAccount();
  const { data, isFetching } = useQuery({
    queryKey: ["categories", account.username],
    queryFn: async () => {
      return await fetchCategories(token);
    },
  });

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data, setCategories]);

  if (isFetching)
    return (
      <div className="flex items-center justify-center size-full">
        <span className=" loading loading-spinner text-primary" />
      </div>
    );

  return (
    <div>
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-row items-center gap-2 p-3 rounded-lg hover:bg-accent/10"
        >
          <LuFolderOpen
            size={24}
            color={colorUtils.getRandomColor(category.id)}
          />
          <h3 className="text-xl">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}
