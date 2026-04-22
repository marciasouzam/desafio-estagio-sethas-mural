import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import arrowRightSquareIcon from '../assets/arrow-right-square_svgrepo.com.svg';
import { criarNoticia } from '../services/noticiasService';
import FormField from '../components/form/FormField';

const schema = z.object({
  titulo:     z.string().min(1, 'Título é obrigatório').max(150, 'Máximo 150 caracteres'),
  resumo:     z.string().min(1, 'Resumo é obrigatório').max(250, 'Máximo 250 caracteres'),
  conteudo:   z.string().min(1, 'Conteúdo é obrigatório'),
  categoria:  z.string().refine(
    (v) => ['RH', 'TI', 'Evento', 'Aviso'].includes(v),
    'Selecione uma categoria'
  ),
  autor:      z.string().min(1, 'Autor é obrigatório').max(30, 'Máximo 30 caracteres'),
  foto_autor: z
    .any()
    .optional()
    .refine((files) => !files?.length || files[0]?.type?.startsWith('image/'), 'Foto do autor deve ser uma imagem'),
  imagem_capa: z
    .any()
    .refine((files) => files?.length > 0, 'Imagem da capa é obrigatória')
    .refine((files) => files?.[0]?.type?.startsWith('image/'), 'Imagem da capa deve ser uma imagem'),
});

const inputClass =
  'w-full border border-divisor rounded-lg px-3 py-2 text-sm text-texto placeholder:text-apoio bg-white focus:outline-none focus:ring-1 focus:ring-enfase';

export default function CadastroNoticias() {
  const navigate = useNavigate();
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const imagemCapaSelecionada = watch('imagem_capa');
  const fotoAutorSelecionada  = watch('foto_autor');

  const onSubmit = async (data) => {
    setEnviando(true);
    setErroEnvio(false);
    try {
      const formData = new FormData();
      formData.append('titulo',      data.titulo);
      formData.append('resumo',      data.resumo);
      formData.append('conteudo',    data.conteudo);
      formData.append('autor',       data.autor);
      formData.append('categoria',   data.categoria);
      formData.append('imagem_capa', data.imagem_capa[0]);
      if (data.foto_autor?.length > 0) {
        formData.append('foto_autor', data.foto_autor[0]);
      }
      await criarNoticia(formData);
      navigate('/', { state: { refresh: Date.now() } });
    } catch {
      setErroEnvio(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-[205px]">

      <Link
        to="/"
        className="flex items-center gap-1.5 text-base text-principal font-sans font-medio leading-textos mb-6 w-fit cursor-pointer transition-colors"
      >
        <img src={arrowRightSquareIcon} alt="" className="h-5 w-5 shrink-0" />
        <span>Voltar ao feed</span>
      </Link>

      <h1 className="mb-6 text-2xl leading-none text-principal font-serif-display font-normal">
        Cadastrar uma nova Notícia
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-superficie border border-divisor rounded-xl p-6 flex flex-col gap-4"
      >
        <FormField htmlFor="titulo" label="Título da Notícia" error={errors.titulo?.message}>
          <input
            id="titulo"
            {...register('titulo')}
            placeholder="Escreva o título da sua notícia"
            className={inputClass}
          />
        </FormField>

        <FormField htmlFor="resumo" label="Resumo do Conteúdo" error={errors.resumo?.message}>
          <input
            id="resumo"
            {...register('resumo')}
            placeholder="Escreva o resumo da sua notícia"
            className={inputClass}
          />
        </FormField>

        <FormField htmlFor="conteudo" label="Conteúdo" error={errors.conteudo?.message}>
          <textarea
            id="conteudo"
            {...register('conteudo')}
            placeholder="Escreva o conteúdo da sua notícia"
            rows={7}
            className={`${inputClass} resize-none`}
          />
        </FormField>

        <div className="grid grid-cols-3 gap-4">
          <FormField htmlFor="categoria" label="Categoria" error={errors.categoria?.message}>
            <select id="categoria" {...register('categoria')} className={`${inputClass} cursor-pointer`}>
              <option value="">Selecione a Categoria</option>
              <option value="RH">RH</option>
              <option value="TI">TI</option>
              <option value="Evento">Evento</option>
              <option value="Aviso">Aviso</option>
            </select>
          </FormField>

          <FormField htmlFor="autor" label="Autor da Notícia" error={errors.autor?.message}>
            <input
              id="autor"
              {...register('autor')}
              placeholder="Autor da Notícia"
              className={inputClass}
            />
          </FormField>

          <FormField label="Foto de Autor" error={errors.foto_autor?.message}>
            <label
              htmlFor="foto_autor"
              className={`${inputClass} flex items-center gap-2 cursor-pointer`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-apoio shrink-0">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span className="text-apoio text-sm truncate">
                {fotoAutorSelecionada?.[0]?.name ?? 'Procurar Arquivo'}
              </span>
            </label>
            <input id="foto_autor" type="file" accept="image/*" {...register('foto_autor')} className="hidden" />
          </FormField>
        </div>

        <FormField error={errors.imagem_capa?.message}>
          <label
            htmlFor="imagem_capa"
            className="flex flex-col items-center justify-center gap-2 border border-dashed border-divisor rounded-xl py-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-apoio">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p className="text-sm text-apoio">
              {imagemCapaSelecionada?.[0]?.name
                ? <span className="text-texto font-medium">{imagemCapaSelecionada[0].name}</span>
                : <><span className="text-enfase font-medium">Clique para fazer o upload</span> da capa da sua notícia</>
              }
            </p>
          </label>
          <input id="imagem_capa" type="file" accept="image/*" {...register('imagem_capa')} className="hidden" />
        </FormField>

        {erroEnvio && (
          <p className="text-sm text-red-500">Erro ao cadastrar notícia. Tente novamente.</p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={enviando}
            className="bg-enfase text-texto font-semibold text-sm px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {enviando ? 'Cadastrando...' : 'Cadastrar notícia'}
          </button>
        </div>
      </form>

    </main>
  );
}