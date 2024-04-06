PGDMP      "                |            SEV-Technology    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24722    SEV-Technology    DATABASE     �   CREATE DATABASE "SEV-Technology" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
     DROP DATABASE "SEV-Technology";
                postgres    false            �            1259    41142    producto    TABLE     M  CREATE TABLE public.producto (
    id_producto integer NOT NULL,
    nombre character varying,
    marca character varying,
    precio double precision,
    categoria character varying,
    descripcion character varying,
    id_usuario character varying(10),
    cantidad bigint,
    img_producto character varying(1000) NOT NULL
);
    DROP TABLE public.producto;
       public         heap    postgres    false            �            1259    41147    producto_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.producto_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.producto_id_producto_seq;
       public          postgres    false    216            �           0    0    producto_id_producto_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.producto_id_producto_seq OWNED BY public.producto.id_producto;
          public          postgres    false    217            �            1259    24723    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id character varying(10) NOT NULL,
    nombre character varying(20) NOT NULL,
    apellido character varying(20) NOT NULL,
    correo character varying(50) NOT NULL,
    contrasena character varying(50) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            T           2604    41148    producto id_producto    DEFAULT     |   ALTER TABLE ONLY public.producto ALTER COLUMN id_producto SET DEFAULT nextval('public.producto_id_producto_seq'::regclass);
 C   ALTER TABLE public.producto ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    217    216            �          0    41142    producto 
   TABLE DATA           �   COPY public.producto (id_producto, nombre, marca, precio, categoria, descripcion, id_usuario, cantidad, img_producto) FROM stdin;
    public          postgres    false    216   �       �          0    24723    usuarios 
   TABLE DATA           L   COPY public.usuarios (id, nombre, apellido, correo, contrasena) FROM stdin;
    public          postgres    false    215   M       �           0    0    producto_id_producto_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.producto_id_producto_seq', 10, true);
          public          postgres    false    217            X           2606    41150    producto producto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_producto);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    216            V           2606    24727    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    215            �   w   x�M�A�0D���=ASA�]ؘ`� 7����H��K��Hv/Y�f* ���\A�x*� ��2�ˑ0}��$:�袲�V*���S^=�Zne��Bi0ΝUy0����}����9�T�,�      �   w   x�3440�06�05�t-.IMJ��t�H,*�L�L�ЩaK��������\NC#c.C΂�R�'��.ohhadjfbn���4.,�(=����)K,2210E�b �P�`�s��)����� 76�     