import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  email: z.string().email(),
  occupation: z.string(),
  employeeName: z.string(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Usuário cadastrado com sucesso', {
        action: {
          label: 'login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar Funcionário')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>
        <div className=" flex w-[350px] flex-col  justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Cadastre uma conta
            </h1>
            {/* <p className="text-sm text-muted-foreground">Cadastre um email</p> */}
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2 font-semibold">
              <Label htmlFor="employeeName">Nome do Funcionário</Label>
              <Input
                id="employeeName"
                type="employeeName"
                {...register('employeeName')}
              />
            </div>
            <div className="space-y-2 font-semibold">
              <Label htmlFor="occupation">Função</Label>
              <Input
                id="occupation"
                type="occupation"
                {...register('occupation')}
              />
            </div>
            <div className="space-y-2 font-semibold">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2 font-semibold">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="phone" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>
            <p className="px-7 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
