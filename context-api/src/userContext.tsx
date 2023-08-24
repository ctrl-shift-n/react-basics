import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type userType = {
  name: string;
  age: number;
};

type providerType = {
  user: userType;
  setUser: Dispatch<SetStateAction<userType>>;
};

export const UserContext = createContext<providerType>({} as providerType);

export const UserContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<userType>({ name: "", age: 0 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
