import Image from "next/image";
import { FC } from "react";
export interface Root {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Daum[];
  support: Support;
}

export interface Daum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

const FormContent: FC = async () => {
  const baseUrl = "https://reqres.in/";
  const getData = async (): Promise<Root> => {
    const response = await fetch(baseUrl + "api/users?page=1");
    const res = response.json() as Promise<Root>;
    return res;
  };

  const addData = async () => {
    "use server";
    
  };

  const { data } = await getData();

  return (
    <>
      <div className="">
        {data.map((item) => {
          const { id, avatar, email, first_name, last_name } = item;

          return (
            <ul key={id} className="mb-4">
              <Image src={avatar} alt={first_name} height={100} width={100} />
              <li>{`${first_name} ${last_name}`}</li>
              <li>{email}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default FormContent;
