import { z } from 'zod';
import { PasswordJoinFormData, TermsAgreementListType } from '@/types/join';
import { InputFieldType } from '@/types/common';
import { EmailFormSchema, PasswordFormSchema, PhoneFormSchema } from './common';

export const AGREEMENT_CHECK_IDS = {
  all: 'all',
  age: 'age',
  term: 'term',
  privacy: 'privacy',
  marketing: 'marketing',
  ad: 'ad',
} as const;

export const TERMS_AGREEMENT_LIST: TermsAgreementListType[] = [
  {
    id: AGREEMENT_CHECK_IDS.age,
    required: true,
    text: '만 14세 이상입니다',
  },
  {
    id: AGREEMENT_CHECK_IDS.term,
    required: true,
    text: '이용약관 동의',
    detail: '보기',
  },
  {
    id: AGREEMENT_CHECK_IDS.privacy,
    required: true,
    text: '개인정보 수집 및 이용 동의',
    detail: '보기',
  },
  {
    id: AGREEMENT_CHECK_IDS.marketing,
    required: false,
    text: '마케팅 목적의 개인정보 수집 및 이용 동의',
    detail: '보기',
  },
  {
    id: AGREEMENT_CHECK_IDS.ad,
    required: false,
    text: '광고성 정보 수신 동의',
  },
];

export const EmailJoinFormSchema = z.object({
  email: EmailFormSchema,
});

export const PasswordJoinFieldList: InputFieldType<PasswordJoinFormData>[] = [
  {
    type: 'text',
    name: 'password',
    title: '이메일(아이디)',
    placeholder: 'abc@email.com',
  },
  {
    type: 'password',
    name: 'rePassword',
    title: '비밀번호',
    placeholder: '8자 이상의 비밀번호',
  },
];

export const PasswordJoinFormSchema = z
  .object({
    password: PasswordFormSchema,
    rePassword: PasswordFormSchema,
  })
  .refine((data) => data.password === data.rePassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['rePassword'],
  });

export const PhoneValidNumberFormSchema = z
  .string()
  .min(6, { message: '인증번호를 입력하세요.' })
  .refine((validNumber) => /^\d{6}$/.test(validNumber), {
    message: '인증번호는 6자리 숫자입니다.',
  });

export const PhoneJoinFormSchema = z.object({
  phone: PhoneFormSchema,
  validNumber: PhoneValidNumberFormSchema,
});
