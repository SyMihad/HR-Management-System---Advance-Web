PGDMP      )                {            hr_management_system    16.0    16.0     Y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            [           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            \           1262    16398    hr_management_system    DATABASE     �   CREATE DATABASE hr_management_system WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 $   DROP DATABASE hr_management_system;
                postgres    false            B          0    16408    Authorizations 
   TABLE DATA                 public          postgres    false    218   �       V          0    16484    DocumentTrack 
   TABLE DATA                 public          postgres    false    238   ;       L          0    16444    JobApplications 
   TABLE DATA                 public          postgres    false    228   U       D          0    16416    JobCategories 
   TABLE DATA                 public          postgres    false    220   x       N          0    16452    JobRequirments 
   TABLE DATA                 public          postgres    false    230   #       P          0    16460    NoticeDescription 
   TABLE DATA                 public          postgres    false    232   0       R          0    16468    NoticeTrack 
   TABLE DATA                 public          postgres    false    234   �       H          0    16430    Organizations 
   TABLE DATA                 public          postgres    false    224   �       T          0    16476    SecureDocuments 
   TABLE DATA                 public          postgres    false    236   �       F          0    16424    UserJobTable 
   TABLE DATA                 public          postgres    false    222   (       J          0    16438    UserOrganizationTable 
   TABLE DATA                 public          postgres    false    226   �       @          0    16400    Users 
   TABLE DATA                 public          postgres    false    216   @       ^           0    0    Authorizations_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Authorizations_id_seq"', 95, true);
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
          public          postgres    false    215            B   �   x����
�0��O�gF�H�t1�	�	��r�`nc�C=}J������T��xۀ���;T������vvB��CpFa@qR�(���B��g�7����r��J�H�!�ѫp��Q�!�1a[��~���/�,6�FGo�G�U[ג�c�b�      V   
   x���          L     x��AK�0����t�Rځ�ċ�U���4��c�dk4iB���.n^v�4px���|��AΫPQ�A���m�?�&����r�&��࿫�X�WgQ��*�dn�p��T�
�0�t`�8�h�}��`K�h�)��yU�%*� ��:_�6{�����&�Y��w�0�������J�e�,fi�$�8v�e�aّ���E����k-����C�|���Ϗ�-368�ߊ����|�r�:�s�Н�>��v16��+�����NVps��y_{��      D   �   x��ͱ
�0@�=_�ȢB�P�:�J�F0��1�C6����:��r�x�T�� �.a\���;���bf�}�8Q�mǀJ�D�އ�8�6��Nt4���U%2!��J����οU�D����?b��ɉ����ƙ~C��y3���r�      N   �   x�͐�N�@E���	/�	�e���b��%l�c)c�,����m�?0���9s7ٽbW�y	bWf�UCG���*�ρ�3�Zٰ���]V�Ɠ�	��m���:�R$��lF�n���P�n�C���S��q��zP��}��"�G(^�2}����9��,"�g<�����'9s��[)?�=���a3�dZ�_���q_�����Q���J��?Z�[gyo��Np7K'��v��<�� X��֨��_�jY�y��      P   �   x�͎�
�0�w��E�ҟ�S�Pm,&:V�pA��>SJi����s��'���L�\��p�acs;5GBwg�`�3H�ea���J��̥:��j#NP��N�*�X���7�vt>����9�;{����`��s�E�]$�`�^��f��`Av����7����0      R   �   x�M�;�0E����,m!�Y'!Q�BǚdjR��������Ť.� �r���"�`�Γ�ah�#�������9�?��߮S]ʛ��N}�9�5���`���rquQ��aܟ����'�]��!ИX�����!���_0�      H     x���Ko�@����	!A��Ti�)ڱ%�%/�;#������E�ݜ{r_Χ�]��	��(�1G�u��\���� m�����c�BB��N�)0}h��j�'p\�_�<���H3���4` �C'���DxMGW��eĈxA[:v(������(m��P������-s�}�g����66��R�Ce1�����`��P�5��;���*MN��)�%j}ޓEeiB5?�>]ky[ܝ�_���gn���P}�      T   �   x���v
Q���W((M��L�S
NM.-Ju�O.�M�+)VR��L�QP�	�%�*i*���y�x��+G���*�9���B�`u��d�d3˴$S��4���$c��DK�4SsSuMk... �u&      F   |   x���v
Q���W((M��L�S
-N-��O
IL�IUR��L�QP*�y�(YY�IΉ%���E�@M�0נ OO?w����W_�0G�PW��ab��`i��`�i��I{�,��m4��� �z?�      J   |   x���v
Q���W((M��L�S
-N-�/JO�ˬJ,���IL�IUR��L�QP*Jz�(Y�HJ�"�
�a�AA�.�~�
���!��
a�>��2XA��RG��TG�XӚ˓���5���� bH�      @   x  x�ŒQo�0���1qK&��n��2�Μ�BL+XL����\��%K����^|���z	�z��M���k�D���2���p�����H��mƄ$Ƿe�Ֆy��I�t�Ȕk�/IR�zS��d���\�\�w7`0O�I��������l����7L&��v��� �������#d\�>^�컙���m��s&&����"��jXڔ,��=�'a���S�����GM�a����,�L�����@�i!b�6�?V1s�.{�9cj���ŧjtS:Yך�v���Fl�j�Y#7�]��Ax���$�a����ql�`�Ć���q���DV���D#mPw���v�?BǮ�Oq�,��z_T��8     