import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import * as date from 'date-fns'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
export default function Lesson (props: LessonProps) {
  const isLessonAvailable = date.isPast(props.availableAt)
  const availableDateFormatted = date.format(props.availableAt, 'EEEE \' - \'d\' de \' MMMM\' - \' k\'h\'mm', {
    locale: ptBR
  })

  return (
    <a href='#'>
      <span className='text-gray-300'>
        {availableDateFormatted}
      </span>
      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable
            ? <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20}/>
              Conteudo liberado
            </span>
            : <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20}/>
              Em Breve
            </span>
          }
          <span className='text-sx rounded py=[0.25rem] px-2 text-white border border-green-300 font-bold'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className='text-gray-200 mt-5 block'>
          {props.title}
        </strong>
      </div>
    </a>
  )
}
