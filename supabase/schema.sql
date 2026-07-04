-- Contact form submissions for vandaq.com
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  subject text not null default 'Demo Talebi',
  message text not null,
  ip text,
  user_agent text,
  status text not null default 'new'
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- RLS: only the service role (used server-side by the API route) can access.
alter table public.contact_submissions enable row level security;

-- No policies granted to anon or authenticated by default.
-- If you want to read this from a Supabase dashboard user with `authenticated` role, add a policy.
