import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Mane&apos;s Dental Clinics</title>
        <meta
          name="description"
          content="Compassionate family dentistry. Same-day check-ins, preventive care, and patient-first service."
        />
      </Head>

      <header className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-bold">
              M
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Dr Mane&apos;s Dental Clinic
              </h1>
              <p className="text-xs opacity-90">
                Comfortable, modern care for the whole family
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="/check-in"
              className="rounded-md bg-white/20 px-4 py-2 hover:bg-white/30">
              Check In
            </Link>
            <Link
              href="/clinic"
              className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/20">
              Locations
            </Link>
            <Link
              href="/about"
              className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/20">
              About Us
            </Link>
            <Link
              href="/about"
              className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/20">
              RHEA Foundation
            </Link>
          </nav>

          <div className="md:hidden">
            <Link
              href="/check-in"
              className="inline-block rounded-md bg-white px-3 py-2 font-semibold text-blue-700">
              Check In
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-white text-slate-700">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Gentle, family-focused dental care
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From baby’s first visit to adult preventive dentistry, our
              practice offers comfortable, high-quality care in a friendly
              environment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/check-in"
                className="rounded-lg border border-blue-100 bg-blue-50 px-5 py-3 font-medium text-blue-700 hover:bg-blue-100">
                Check In
              </Link>
              <Link
                href="/schedule"
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700">
                Schedule an Appointment
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Family Dentistry</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Care for all ages in a calm, welcoming space.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Same-day Check-in</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Fast digital check-in to save time at your visit.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Preventive Care</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Cleanings, exams, and fluoride for long-term oral health.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border bg-gradient-to-br from-sky-200 to-blue-100">
              <div className="p-6 text-center">
                <p className="text-sm text-slate-600">Hero image placeholder</p>
                <div className="mt-4 flex h-40 w-40 items-center justify-center rounded-full border bg-white/60">
                  🦷
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Photo credit / replace with clinic image
            </div>
          </div>
        </section>

        <section className="mx-auto mb-12 max-w-6xl rounded-lg bg-blue-50 px-6 py-12">
          <h3 className="text-2xl font-bold text-blue-800">
            New here? Schedule an Appointment Now.
          </h3>
          <p className="mt-2 text-slate-600">
            Hit the button and fill a short form before your appointment.
          </p>

          <div className="mt-6">
            <Link
              href="/check-in"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Start Check-in
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="text-xl font-semibold">Patient stories</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <blockquote className="rounded-lg border bg-white p-4">
              “The team made our toddler feel safe — best first dental visit!”
              <cite className="mt-2 block text-sm text-slate-500">
                — A. Morgan
              </cite>
            </blockquote>
            <blockquote className="rounded-lg border bg-white p-4">
              “Quick check-in and very gentle cleaning. Highly recommend.”
              <cite className="mt-2 block text-sm text-slate-500">
                — J. Lee
              </cite>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Dr Mane&apos;s Dental Clinic</p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/about" className="text-sm text-blue-700">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-blue-700">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
