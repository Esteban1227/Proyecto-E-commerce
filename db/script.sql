PGDMP  
    +                |            SEV-Technology    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    SEV-Technology    DATABASE     �   CREATE DATABASE "SEV-Technology" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
     DROP DATABASE "SEV-Technology";
                postgres    false            �            1259    16405    producto    TABLE       CREATE TABLE public.producto (
    id_producto integer NOT NULL,
    nombre character varying,
    marca character varying,
    precio double precision,
    categoria character varying,
    descripcion character varying,
    id_usuario character varying(10),
    cantidad bigint
);
    DROP TABLE public.producto;
       public         heap    postgres    false            �            1259    16404    producto_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.producto_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.producto_id_producto_seq;
       public          postgres    false    217            �           0    0    producto_id_producto_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.producto_id_producto_seq OWNED BY public.producto.id_producto;
          public          postgres    false    216            �            1259    16399    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id character varying(10) NOT NULL,
    nombre character varying(20) NOT NULL,
    apellido character varying(20) NOT NULL,
    correo character varying(50) NOT NULL,
    contrasena character varying(50) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            T           2604    16408    producto id_producto    DEFAULT     |   ALTER TABLE ONLY public.producto ALTER COLUMN id_producto SET DEFAULT nextval('public.producto_id_producto_seq'::regclass);
 C   ALTER TABLE public.producto ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    217    216    217            �          0    16405    producto 
   TABLE DATA           t   COPY public.producto (id_producto, nombre, marca, precio, categoria, descripcion, id_usuario, cantidad) FROM stdin;
    public          postgres    false    217   �       �          0    16399    usuarios 
   TABLE DATA           L   COPY public.usuarios (id, nombre, apellido, correo, contrasena) FROM stdin;
    public          postgres    false    215   �       �           0    0    producto_id_producto_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.producto_id_producto_seq', 3, true);
          public          postgres    false    216            X           2606    16412    producto producto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_producto);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    217            V           2606    16403    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    215            �   d   x�M�=@P�oO�N v�D-A)��l�E�<ܟ��4�)�Q�߯SG�wH��f�Tn�\��)��q!A�^�>�lCi�-A�UљW7?}����GDt�      �   �   x�e�;�0�g�� �Ӧ�	����X�JP� �1p#���HUu��������L�R#�����aw'fK�,�,�ڶ�l'�� U*�<� ��7G,�γB�1ܢ�L�R�|L�*K�ߋ�*WU��rg�`=����ۛ��jb��@>�3��a��&0�0z���:F�lʹ�H!�M�I�     