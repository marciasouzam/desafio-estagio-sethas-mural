import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import arrowRightSquareIcon from '../assets/arrow-right-square_svgrepo.com.svg';
import { criarNoticia } from '../services/noticiasService';
import FormField from '../components/form/FormField';
import BannerNewsletter from '../components/BannerNewsletter';
import arquivoMenor from '../assets/arquivoMenor.svg';
import arquivoMaior from '../assets/arquivoMaior.svg';


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
  'w-full border border-divisor rounded-lg px-3 py-2 text-sm text-texto placeholder:text-formulario bg-white focus:outline-none';
const selectClass =
  'w-full border border-divisor rounded-lg px-3 py-2 text-sm text-formulario bg-white focus:outline-none cursor-pointer';

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
    <>
    <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-[205px]">

      <Link
        to="/"
        className="flex items-center gap-2.5 text-base text-principal font-sans font-medio leading-textos mb-9 w-fit cursor-pointer transition-colors"
      >
        <img src={arrowRightSquareIcon} alt="" className="h-5 w-5 shrink-0" />
        <span>Voltar ao feed</span>
      </Link>

      <h1 className="mb-9 text-2xl leading-none text-principal font-serif-display font-normal">
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
            <select
              id="categoria"
              {...register('categoria')}
              className={selectClass}
            >
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
              <img src={arquivoMenor} alt="" className="w-[15.12px] h-[17.88px] shrink-0" />
              <span className="text-texto text-sm truncate">
                {fotoAutorSelecionada?.[0]?.name ?? 'Procurar Arquivo'}
              </span>
            </label>
            <input id="foto_autor" type="file" accept="image/*" {...register('foto_autor')} className="hidden" />
          </FormField>
        </div>

        <FormField error={errors.imagem_capa?.message}>
          <label
            htmlFor="imagem_capa"
            className="flex flex-col items-center justify-center gap-2 border border-dashed border-divisor rounded-xl py-6 cursor-pointer"
          >
            <img src={arquivoMaior} alt="" className="w-6 h-6" />
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
            className="bg-enfase text-texto font-semibold text-base px-3 py-[7.5px] rounded-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {enviando ? 'Cadastrando...' : 'Cadastrar notícia'}
          </button>
        </div>
      </form>

    </main>
    <BannerNewsletter />
  </>
  );
}