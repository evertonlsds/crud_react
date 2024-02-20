import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SingIn() {
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
          <form className="space-y-4">
            <div className="space-y-2 font-semibold">
              <Label>Usuário</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-2 font-semibold">
              <Label>Senha</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
