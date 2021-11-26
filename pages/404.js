import { Icon } from "semantic-ui-react";

export default function Error404() {
  return (
    <div style={{ padding: "20vh 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" /> 404 : 페이지를 찾을 수
      없습니다.
    </div>
  );
}
