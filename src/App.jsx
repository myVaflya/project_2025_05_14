import { Form, Input, InputNumber, Checkbox, Button } from 'antd';
import { Desktop, Mobile, Tablet } from './Responsive';

export const App = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Desktop>Вы смотрите это на компьютере</Desktop>
            <Tablet>Вы смотрите это на планшете</Tablet>
            <Mobile>Вы смотрите это на телефоне</Mobile>
            <Form
                name='auth'
                onFinish={onFinish}
                autoComplete='off'
            >
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле логин'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле пароль'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Возраст"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле возраст'
                        }
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}