PGDMP      2                {            hr_management_system    16.0    16.0 P    Y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            [           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            \           1262    16398    hr_management_system    DATABASE     �   CREATE DATABASE hr_management_system WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 $   DROP DATABASE hr_management_system;
                postgres    false            ]           0    0    DATABASE hr_management_system    COMMENT     Q   COMMENT ON DATABASE hr_management_system IS 'Database for HR Management System';
                   postgres    false    4956            �            1259    16408    Authorizations    TABLE     }   CREATE TABLE public."Authorizations" (
    id integer NOT NULL,
    role character varying NOT NULL,
    "userId" integer
);
 $   DROP TABLE public."Authorizations";
       public         heap    postgres    false            �            1259    16407    Authorizations_id_seq    SEQUENCE     �   ALTER TABLE public."Authorizations" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Authorizations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    16484    DocumentTrack    TABLE     w   CREATE TABLE public."DocumentTrack" (
    id integer NOT NULL,
    "userId" integer,
    "secureDocumentId" integer
);
 #   DROP TABLE public."DocumentTrack";
       public         heap    postgres    false            �            1259    16483    DocumentTrack_id_seq    SEQUENCE     �   ALTER TABLE public."DocumentTrack" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."DocumentTrack_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    238            �            1259    16444    JobApplications    TABLE     V  CREATE TABLE public."JobApplications" (
    id integer NOT NULL,
    "jobCategoriesId" integer,
    "Name" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "PhoneNo" character varying NOT NULL,
    "Address" character varying,
    "UploadFileName" character varying NOT NULL,
    "Status" character varying NOT NULL
);
 %   DROP TABLE public."JobApplications";
       public         heap    postgres    false            �            1259    16443    JobApplications_id_seq    SEQUENCE     �   ALTER TABLE public."JobApplications" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."JobApplications_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    16416    JobCategories    TABLE     }   CREATE TABLE public."JobCategories" (
    id integer NOT NULL,
    "Name" character varying,
    "organizationId" integer
);
 #   DROP TABLE public."JobCategories";
       public         heap    postgres    false            �            1259    16415    JobCategories_id_seq    SEQUENCE     �   ALTER TABLE public."JobCategories" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."JobCategories_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �            1259    16452    JobRequirments    TABLE     Q  CREATE TABLE public."JobRequirments" (
    id integer NOT NULL,
    "jobCategoriesId" integer,
    "SubmissionDate" timestamp without time zone NOT NULL,
    "CloseDate" timestamp without time zone NOT NULL,
    "Title" character varying NOT NULL,
    "Description" character varying NOT NULL,
    "Status" character varying NOT NULL
);
 $   DROP TABLE public."JobRequirments";
       public         heap    postgres    false            �            1259    16451    JobRequirments_id_seq    SEQUENCE     �   ALTER TABLE public."JobRequirments" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."JobRequirments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    230            �            1259    16460    NoticeDescription    TABLE     �   CREATE TABLE public."NoticeDescription" (
    id integer NOT NULL,
    "Title" character varying NOT NULL,
    "Description" character varying NOT NULL
);
 '   DROP TABLE public."NoticeDescription";
       public         heap    postgres    false            �            1259    16459    NoticeDescription_id_seq    SEQUENCE     �   ALTER TABLE public."NoticeDescription" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."NoticeDescription_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    232            �            1259    16468    NoticeTrack    TABLE     �   CREATE TABLE public."NoticeTrack" (
    id integer NOT NULL,
    "SendFromUserID" integer NOT NULL,
    "SendToUserID" integer NOT NULL,
    "Status" character varying NOT NULL,
    "noticeDescriptionId" integer
);
 !   DROP TABLE public."NoticeTrack";
       public         heap    postgres    false            �            1259    16467    NoticeTrack_id_seq    SEQUENCE     �   ALTER TABLE public."NoticeTrack" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."NoticeTrack_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    234            �            1259    16430    Organizations    TABLE     �   CREATE TABLE public."Organizations" (
    id integer NOT NULL,
    "Name" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "Password" character varying NOT NULL
);
 #   DROP TABLE public."Organizations";
       public         heap    postgres    false            �            1259    16429    Organizations_id_seq    SEQUENCE     �   ALTER TABLE public."Organizations" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Organizations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    16476    SecureDocuments    TABLE     r   CREATE TABLE public."SecureDocuments" (
    id integer NOT NULL,
    "DocumentName" character varying NOT NULL
);
 %   DROP TABLE public."SecureDocuments";
       public         heap    postgres    false            �            1259    16475    SecureDocuments_id_seq    SEQUENCE     �   ALTER TABLE public."SecureDocuments" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."SecureDocuments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    236            �            1259    16424    UserJobTable    TABLE     s   CREATE TABLE public."UserJobTable" (
    id integer NOT NULL,
    "userId" integer,
    "jobCategoryId" integer
);
 "   DROP TABLE public."UserJobTable";
       public         heap    postgres    false            �            1259    16423    UserJobTable_id_seq    SEQUENCE     �   ALTER TABLE public."UserJobTable" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."UserJobTable_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            �            1259    16438    UserOrganizationTable    TABLE     }   CREATE TABLE public."UserOrganizationTable" (
    id integer NOT NULL,
    "userId" integer,
    "organizationId" integer
);
 +   DROP TABLE public."UserOrganizationTable";
       public         heap    postgres    false            �            1259    16437    UserOrganizationTable_id_seq    SEQUENCE     �   ALTER TABLE public."UserOrganizationTable" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."UserOrganizationTable_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226            �            1259    16400    Users    TABLE     7  CREATE TABLE public."Users" (
    id integer NOT NULL,
    "Name" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "Gender" character varying NOT NULL,
    "DOB" timestamp without time zone NOT NULL,
    "PhoneNum" character varying NOT NULL,
    "Password" character varying NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16399    Users_id_seq    SEQUENCE     �   ALTER TABLE public."Users" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            B          0    16408    Authorizations 
   TABLE DATA           >   COPY public."Authorizations" (id, role, "userId") FROM stdin;
    public          postgres    false    218   �f       V          0    16484    DocumentTrack 
   TABLE DATA           K   COPY public."DocumentTrack" (id, "userId", "secureDocumentId") FROM stdin;
    public          postgres    false    238   �f       L          0    16444    JobApplications 
   TABLE DATA           �   COPY public."JobApplications" (id, "jobCategoriesId", "Name", "Email", "PhoneNo", "Address", "UploadFileName", "Status") FROM stdin;
    public          postgres    false    228   g       D          0    16416    JobCategories 
   TABLE DATA           G   COPY public."JobCategories" (id, "Name", "organizationId") FROM stdin;
    public          postgres    false    220   �g       N          0    16452    JobRequirments 
   TABLE DATA           �   COPY public."JobRequirments" (id, "jobCategoriesId", "SubmissionDate", "CloseDate", "Title", "Description", "Status") FROM stdin;
    public          postgres    false    230   �g       P          0    16460    NoticeDescription 
   TABLE DATA           I   COPY public."NoticeDescription" (id, "Title", "Description") FROM stdin;
    public          postgres    false    232   �h       R          0    16468    NoticeTrack 
   TABLE DATA           n   COPY public."NoticeTrack" (id, "SendFromUserID", "SendToUserID", "Status", "noticeDescriptionId") FROM stdin;
    public          postgres    false    234   �h       H          0    16430    Organizations 
   TABLE DATA           J   COPY public."Organizations" (id, "Name", "Email", "Password") FROM stdin;
    public          postgres    false    224   i       T          0    16476    SecureDocuments 
   TABLE DATA           ?   COPY public."SecureDocuments" (id, "DocumentName") FROM stdin;
    public          postgres    false    236   �i       F          0    16424    UserJobTable 
   TABLE DATA           G   COPY public."UserJobTable" (id, "userId", "jobCategoryId") FROM stdin;
    public          postgres    false    222   j       J          0    16438    UserOrganizationTable 
   TABLE DATA           Q   COPY public."UserOrganizationTable" (id, "userId", "organizationId") FROM stdin;
    public          postgres    false    226   ?j       @          0    16400    Users 
   TABLE DATA           _   COPY public."Users" (id, "Name", "Email", "Gender", "DOB", "PhoneNum", "Password") FROM stdin;
    public          postgres    false    216   jj       ^           0    0    Authorizations_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Authorizations_id_seq"', 95, true);
          public          postgres    false    217            _           0    0    DocumentTrack_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."DocumentTrack_id_seq"', 4, true);
          public          postgres    false    237            `           0    0    JobApplications_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."JobApplications_id_seq"', 9, true);
          public          postgres    false    227            a           0    0    JobCategories_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."JobCategories_id_seq"', 7, true);
          public          postgres    false    219            b           0    0    JobRequirments_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."JobRequirments_id_seq"', 19, true);
          public          postgres    false    229            c           0    0    NoticeDescription_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."NoticeDescription_id_seq"', 6, true);
          public          postgres    false    231            d           0    0    NoticeTrack_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."NoticeTrack_id_seq"', 6, true);
          public          postgres    false    233            e           0    0    Organizations_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Organizations_id_seq"', 6, true);
          public          postgres    false    223            f           0    0    SecureDocuments_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."SecureDocuments_id_seq"', 4, true);
          public          postgres    false    235            g           0    0    UserJobTable_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."UserJobTable_id_seq"', 50, true);
          public          postgres    false    221            h           0    0    UserOrganizationTable_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."UserOrganizationTable_id_seq"', 32, true);
          public          postgres    false    225            i           0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 98, true);
          public          postgres    false    215            �           2606    16412 "   Authorizations Authorizations_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."Authorizations"
    ADD CONSTRAINT "Authorizations_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."Authorizations" DROP CONSTRAINT "Authorizations_pkey";
       public            postgres    false    218            �           2606    16488     DocumentTrack DocumentTrack_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."DocumentTrack"
    ADD CONSTRAINT "DocumentTrack_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."DocumentTrack" DROP CONSTRAINT "DocumentTrack_pkey";
       public            postgres    false    238            �           2606    16450 $   JobApplications JobApplications_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."JobApplications"
    ADD CONSTRAINT "JobApplications_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."JobApplications" DROP CONSTRAINT "JobApplications_pkey";
       public            postgres    false    228            �           2606    16422     JobCategories JobCategories_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."JobCategories"
    ADD CONSTRAINT "JobCategories_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."JobCategories" DROP CONSTRAINT "JobCategories_pkey";
       public            postgres    false    220            �           2606    16458 "   JobRequirments JobRequirments_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."JobRequirments"
    ADD CONSTRAINT "JobRequirments_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."JobRequirments" DROP CONSTRAINT "JobRequirments_pkey";
       public            postgres    false    230            �           2606    16466 (   NoticeDescription NoticeDescription_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."NoticeDescription"
    ADD CONSTRAINT "NoticeDescription_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."NoticeDescription" DROP CONSTRAINT "NoticeDescription_pkey";
       public            postgres    false    232            �           2606    16474    NoticeTrack NoticeTrack_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."NoticeTrack"
    ADD CONSTRAINT "NoticeTrack_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."NoticeTrack" DROP CONSTRAINT "NoticeTrack_pkey";
       public            postgres    false    234            �           2606    16436     Organizations Organizations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."Organizations"
    ADD CONSTRAINT "Organizations_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."Organizations" DROP CONSTRAINT "Organizations_pkey";
       public            postgres    false    224            �           2606    16482 $   SecureDocuments SecureDocuments_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."SecureDocuments"
    ADD CONSTRAINT "SecureDocuments_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."SecureDocuments" DROP CONSTRAINT "SecureDocuments_pkey";
       public            postgres    false    236            �           2606    33043 *   NoticeTrack UQ_5fe3b461bb7ffef6b16a182893d 
   CONSTRAINT     z   ALTER TABLE ONLY public."NoticeTrack"
    ADD CONSTRAINT "UQ_5fe3b461bb7ffef6b16a182893d" UNIQUE ("noticeDescriptionId");
 X   ALTER TABLE ONLY public."NoticeTrack" DROP CONSTRAINT "UQ_5fe3b461bb7ffef6b16a182893d";
       public            postgres    false    234            �           2606    16742 -   Authorizations UQ_7f643649a1f56e37904f3c8eb6b 
   CONSTRAINT     p   ALTER TABLE ONLY public."Authorizations"
    ADD CONSTRAINT "UQ_7f643649a1f56e37904f3c8eb6b" UNIQUE ("userId");
 [   ALTER TABLE ONLY public."Authorizations" DROP CONSTRAINT "UQ_7f643649a1f56e37904f3c8eb6b";
       public            postgres    false    218            �           2606    16428    UserJobTable UserJobTable_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."UserJobTable"
    ADD CONSTRAINT "UserJobTable_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."UserJobTable" DROP CONSTRAINT "UserJobTable_pkey";
       public            postgres    false    222            �           2606    16442 0   UserOrganizationTable UserOrganizationTable_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."UserOrganizationTable"
    ADD CONSTRAINT "UserOrganizationTable_pkey" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public."UserOrganizationTable" DROP CONSTRAINT "UserOrganizationTable_pkey";
       public            postgres    false    226            �           2606    16404    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    216            �           2606    32992 +   UserJobTable FK_1aa599fa2211df0a35b8c2f0677    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserJobTable"
    ADD CONSTRAINT "FK_1aa599fa2211df0a35b8c2f0677" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public."UserJobTable" DROP CONSTRAINT "FK_1aa599fa2211df0a35b8c2f0677";
       public          postgres    false    4744    222    216            �           2606    33007 4   UserOrganizationTable FK_2bc5ebb5377ff1bcc38915971b4    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserOrganizationTable"
    ADD CONSTRAINT "FK_2bc5ebb5377ff1bcc38915971b4" FOREIGN KEY ("organizationId") REFERENCES public."Organizations"(id) ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."UserOrganizationTable" DROP CONSTRAINT "FK_2bc5ebb5377ff1bcc38915971b4";
       public          postgres    false    224    226    4754            �           2606    33059 *   NoticeTrack FK_543bb1c3f8e3f5dc7cd9ed08395    FK CONSTRAINT     �   ALTER TABLE ONLY public."NoticeTrack"
    ADD CONSTRAINT "FK_543bb1c3f8e3f5dc7cd9ed08395" FOREIGN KEY ("SendFromUserID") REFERENCES public."Users"(id) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."NoticeTrack" DROP CONSTRAINT "FK_543bb1c3f8e3f5dc7cd9ed08395";
       public          postgres    false    216    4744    234            �           2606    33064 *   NoticeTrack FK_543ce8f4749160f421506279db2    FK CONSTRAINT     �   ALTER TABLE ONLY public."NoticeTrack"
    ADD CONSTRAINT "FK_543ce8f4749160f421506279db2" FOREIGN KEY ("SendToUserID") REFERENCES public."Users"(id) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public."NoticeTrack" DROP CONSTRAINT "FK_543ce8f4749160f421506279db2";
       public          postgres    false    216    234    4744            �           2606    33044 *   NoticeTrack FK_5fe3b461bb7ffef6b16a182893d    FK CONSTRAINT     �   ALTER TABLE ONLY public."NoticeTrack"
    ADD CONSTRAINT "FK_5fe3b461bb7ffef6b16a182893d" FOREIGN KEY ("noticeDescriptionId") REFERENCES public."NoticeDescription"(id);
 X   ALTER TABLE ONLY public."NoticeTrack" DROP CONSTRAINT "FK_5fe3b461bb7ffef6b16a182893d";
       public          postgres    false    4762    234    232            �           2606    33002 4   UserOrganizationTable FK_71505ad20f219c62d748dfe8a5f    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserOrganizationTable"
    ADD CONSTRAINT "FK_71505ad20f219c62d748dfe8a5f" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."UserOrganizationTable" DROP CONSTRAINT "FK_71505ad20f219c62d748dfe8a5f";
       public          postgres    false    4744    216    226            �           2606    33103 ,   JobCategories FK_7bb5601a7638fee5e198c2b2a7c    FK CONSTRAINT     �   ALTER TABLE ONLY public."JobCategories"
    ADD CONSTRAINT "FK_7bb5601a7638fee5e198c2b2a7c" FOREIGN KEY ("organizationId") REFERENCES public."Organizations"(id) ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."JobCategories" DROP CONSTRAINT "FK_7bb5601a7638fee5e198c2b2a7c";
       public          postgres    false    220    224    4754            �           2606    32987 -   Authorizations FK_7f643649a1f56e37904f3c8eb6b    FK CONSTRAINT     �   ALTER TABLE ONLY public."Authorizations"
    ADD CONSTRAINT "FK_7f643649a1f56e37904f3c8eb6b" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."Authorizations" DROP CONSTRAINT "FK_7f643649a1f56e37904f3c8eb6b";
       public          postgres    false    4744    216    218            �           2606    33037 .   JobApplications FK_8f8133e7c9400c303508ca0c212    FK CONSTRAINT     �   ALTER TABLE ONLY public."JobApplications"
    ADD CONSTRAINT "FK_8f8133e7c9400c303508ca0c212" FOREIGN KEY ("jobCategoriesId") REFERENCES public."JobCategories"(id);
 \   ALTER TABLE ONLY public."JobApplications" DROP CONSTRAINT "FK_8f8133e7c9400c303508ca0c212";
       public          postgres    false    228    4750    220            �           2606    33108 ,   DocumentTrack FK_8ff3d6c156efc79afdd028da38c    FK CONSTRAINT     �   ALTER TABLE ONLY public."DocumentTrack"
    ADD CONSTRAINT "FK_8ff3d6c156efc79afdd028da38c" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public."DocumentTrack" DROP CONSTRAINT "FK_8ff3d6c156efc79afdd028da38c";
       public          postgres    false    216    4744    238            �           2606    32997 +   UserJobTable FK_9cbd8ce800ab40ca26c89936a41    FK CONSTRAINT     �   ALTER TABLE ONLY public."UserJobTable"
    ADD CONSTRAINT "FK_9cbd8ce800ab40ca26c89936a41" FOREIGN KEY ("jobCategoryId") REFERENCES public."JobCategories"(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public."UserJobTable" DROP CONSTRAINT "FK_9cbd8ce800ab40ca26c89936a41";
       public          postgres    false    222    220    4750            �           2606    33074 ,   DocumentTrack FK_d2dfab61d8e0b856296b3c165f2    FK CONSTRAINT     �   ALTER TABLE ONLY public."DocumentTrack"
    ADD CONSTRAINT "FK_d2dfab61d8e0b856296b3c165f2" FOREIGN KEY ("secureDocumentId") REFERENCES public."SecureDocuments"(id);
 Z   ALTER TABLE ONLY public."DocumentTrack" DROP CONSTRAINT "FK_d2dfab61d8e0b856296b3c165f2";
       public          postgres    false    4768    236    238            �           2606    33032 -   JobRequirments FK_e7324d83c52085a194c59af4007    FK CONSTRAINT     �   ALTER TABLE ONLY public."JobRequirments"
    ADD CONSTRAINT "FK_e7324d83c52085a194c59af4007" FOREIGN KEY ("jobCategoriesId") REFERENCES public."JobCategories"(id);
 [   ALTER TABLE ONLY public."JobRequirments" DROP CONSTRAINT "FK_e7324d83c52085a194c59af4007";
       public          postgres    false    220    4750    230            B   <   x�37�.-H-�wL����47�4��M�KLO-�4�4�t�-�ɯLM�4����� �x�      V      x������ � �      L   �   x��̱� ����<@C���nnƤ��˵P�lS`��N:���9�v���Pz�$/�9�T}��R��p�+��>��X��혬a���}�dc�濁i��|�ʇ�������}]6����u]7��S,�U0��^��'      D   5   x�3��*���/RpI-K��/H-�4�2��M�KL��8CR�K�s#F��� ���      N   �   x�E��
B!D�������\�UmZ��[I���?3��0��+,Z�pR1-�/l�|��
.�}��c�=8S�[��u�z*1��i3צ��LI����Xe׀�����3g }pӇ5��kc{�R�7pj-4      P   H   x�3�.M��,QHT(J-�/2��KK���8���2SRrS�i�E@).�t���ˌ�$��Lp��qqq ��9�      R      x�3�4�4��+NM��4����� 6��      H   �   x�e�;�0  й=�s�7�hL��R�R�b�B�"��'/�	�R�]�����ήx�J&�()$�H�a]����5<{��y�X(b.疏h�)�O)��B��q���)�:�.4����,=S���@����U�O��=3����G=��=�(.�d9Z�qkt��w&�h��A?�j=x      T   0   x�3�4NL611O6�LK205HI31KKL26IL4�4H357����� א	�      F      x�31�4�4�2��4�4����� #n�      J      x�3��4�4�26�4�1z\\\ #�      @     x���=o�0 Dg�+Xql�bܩ  �$P�TU�Rp'���o�1u�P�w�O:vv�{^q	�7�+�[Xt⺴DntLtd��} l�Ę^�FFZX�&(��Mߩj>br�a���:�yf8g��i�#3K�P
���;�y	N���o?f������v����n]+pF����:�ވ��T�EB��I��٫p�0
<ѷ�̹�����,c�yF��X��c�A���Ƥ���=E���$���OY�Q^��(q�n�     