import { LuChevronDown } from "react-icons/lu";
import { useAccount } from "../../hooks/useAccount";

export default function UserProfiles() {
  const { account } = useAccount(); // Assuming useAuth hook is used
  return (
    <div className="w-full py-4 dropdown dropdown-start">
      <div
        tabIndex={0}
        role="button"
        className="flex flex-row justify-between rounded-none btn "
      >
        <div className="flex flex-row items-center gap-3">
          <button className=" btn-circle btn-sm bg-primary/20">S</button>
          <h6>{account.username}</h6>
        </div>

        <LuChevronDown size={20} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-full p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}
