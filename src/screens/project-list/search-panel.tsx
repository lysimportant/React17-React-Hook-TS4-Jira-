import { memo, useState } from "react";
import { IUser } from ".";
interface Props {
  param: {
    name: string;
    personId: string;
  };
  setParam: React.Dispatch<
    React.SetStateAction<{
      name: string;
      personId: string;
    }>
  >;
  users: IUser[];
}
export default memo(({ param, setParam, users }: Props) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
});
