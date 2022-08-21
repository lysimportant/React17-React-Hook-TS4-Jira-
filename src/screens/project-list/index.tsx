import { useState, useEffect, memo, FC } from "react";
import qs from "qs";
import SearchPanel from "./search-panel";
import List from "./list";
import { REACT_APP_API_URL } from "@/constants/project";
import { cleanObject } from "@/utils/index";
export type IUser = { id: number; name: string };
export interface IList {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: string;
}
export default memo(() => {
  // 搜索内容
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  //
  const [list, setList] = useState<IList[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetch(
      `${REACT_APP_API_URL}/projects?${qs.stringify(cleanObject(param))}`
    ).then(async (respone) => {
      if (respone.ok) {
        setList(await respone.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/users`).then(async (respone) => {
      if (respone.ok) {
        setUsers(await respone.json());
      }
    });
  }, []);
  return (
    <>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </>
  );
});
