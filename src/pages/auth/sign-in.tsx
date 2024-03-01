import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className=" flex w-[350px] flex-col  justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas Obras
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2 font-semibold">
              <Label htmlFor="email">Usuário</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
