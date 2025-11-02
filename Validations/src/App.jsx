import React, { useActionState } from 'react'

const App = () => {
  const handleForm=(prevData,formData)=>{
      let name=formData.get('name')
      let password=formData.get('password')
      let regix= /^[A-Z0-9]+$/i;

      if( !name || name.length > 5){
        return {error : 'Name cannot be empty or cannot contain 5 charactor',name,password}
      } else if(!regix.test(password)){
        return {error : 'Passowrd can only contain number and alphabets',name,password}
      } else {
        return {message : 'Login Sucessful !',name,password}
      }
      
  }

  const [data,action,pending]= useActionState(handleForm)

  return (
    <div className='text-center'>
      <h1>useActionState Hook</h1>
      {
        data?.error && <span className='text-red-500'>{data?.error}</span>
      }
      {
        data?.message && <span className='text-green-500'>{data?.message}</span>
      }
      <form action={action}>
      <input defaultValue={data?.name} type="text" name='name' className='border-2 mt-10' placeholder='enter name'/>
      <br /><br />
      <input defaultValue={data?.password} type="text" name='password' className='border-2' placeholder='enter password'/>
      <br /><br />
      <button 
      disabled={pending}
      className={`border-2 px-2 ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
      {pending ? 'Submitting...' : 'Login'}
      </button>

      </form>
    </div>
  )
}

export default App