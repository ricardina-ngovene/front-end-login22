import { useForm } from 'react-hook-form';
import { Header } from '../components/header'
import Footer from '../components/footer';


export const Login = () => {
    
      const errorStyles = { color: "red", fontSize: "12px", lineHeight: "18px" };
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      function onSubmeter( data){

      }
  
    return (
     <>
        <Header />
        <div className="max-w-md mx-auto my-8">
        <h2 className='text-2xl font-bold'>Faça Login</h2>
        <form onSubmit={handleSubmit(onSubmeter)}>
            <div className="max-w-md mx-auto my-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomeCompleto">Nome Completo:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='nome'
                {...register("nome", {
                    required: "O nome é obrigatório!",
                  })}
                  placeholder="Nome"
                />
                {errors.nome && <p style={errorStyles}>{errors.nome.message}</p>}
            </div>
            
            <div className="max-w-md mx-auto my-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">Password:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name='password'
                {...register("password", {
                    required: "O password é obrigatório!",
                  })}
                  placeholder="password"
                />
                {errors.password && <p style={errorStyles}>{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
    <button
      className="bg-red-500 hover: hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Entrar
    </button>
  </div>
        </form>
        </div>
        <Footer/>
     </>
  );

};

