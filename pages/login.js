import  Axios  from "axios";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
    const router = useRouter()
    const login = () => {
        Axios.post('/api/login').then(res => {
           if(res.status === 200) {
               // 로그인 성공
               router.push('/admin')
           } 
        })
    }

  return (
    <div style={{ padding: "10vh 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input placeholder="Password" />
        </Form.Field>
        <Button onClick={login} color="blue">Login</Button>
      </Form>
    </div>
  );
}
