PGDMP                      |            SEV-Technology    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24722    SEV-Technology    DATABASE     �   CREATE DATABASE "SEV-Technology" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
     DROP DATABASE "SEV-Technology";
                postgres    false            �            1259    24723    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id character varying(10) NOT NULL,
    nombre character varying(20) NOT NULL,
    apellido character varying(20) NOT NULL,
    correo character varying(50) NOT NULL,
    contrasena character varying(50) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �          0    24723    usuarios 
   TABLE DATA           L   COPY public.usuarios (id, nombre, apellido, correo, contrasena) FROM stdin;
    public          postgres    false    215   �       P           2606    24727    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    215            �   k   x�3440�06�05�t-.IMJ��t�H,*�L�L�ЩaK��������\NC#c.C΂�R�'��.ohhadjfbn���4.,�(=����)K,2210E����� ��+u     