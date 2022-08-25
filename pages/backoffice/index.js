import FormLogin from '@/components/FormLogin';

export default function LoginIndex() {


    return (
        <div className='container'>
            <h1>Login Page</h1>

            <div className='grid'>
                {/* Login Component */}
                <div>
                    <FormLogin />
                </div>

            </div>
        </div>
    );

}