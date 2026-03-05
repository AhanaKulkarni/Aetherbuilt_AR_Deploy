import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const submitContact = useSubmitContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
  });

  const onSubmit = (data: ContactInput) => {
    submitContact.mutate(data, {
      onSuccess: () => setIsSuccess(true)
    });
  };

  return (
    <section id="deployment" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-display text-xs tracking-[0.2em] text-metallic uppercase block mb-4">
            {t('contact.header')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center rounded-lg max-w-2xl mx-auto"
          >
            <CheckCircle2 className="w-16 h-16 text-zinc-300 mx-auto mb-6" strokeWidth={1} />
            <h3 className="font-display text-2xl text-zinc-100 mb-4">{t('contact.form.success')}</h3>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card p-8 md:p-12 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Group 1 */}
              <div className="space-y-6">
                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.company')} *
                  </label>
                  <input
                    {...register("companyName")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.companyName && <span className="text-red-400 text-xs mt-1 block">{errors.companyName.message}</span>}
                </div>
                
                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.person')} *
                  </label>
                  <input
                    {...register("contactPersonName")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.contactPersonName && <span className="text-red-400 text-xs mt-1 block">{errors.contactPersonName.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.designation')} *
                  </label>
                  <input
                    {...register("designation")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.designation && <span className="text-red-400 text-xs mt-1 block">{errors.designation.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    {...register("phoneNumber")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.phoneNumber && <span className="text-red-400 text-xs mt-1 block">{errors.phoneNumber.message}</span>}
                </div>
                
                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.website')}
                  </label>
                  <input
                    {...register("website")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                </div>
              </div>

              {/* Group 2 */}
              <div className="space-y-6">
                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.category')} *
                  </label>
                  <input
                    {...register("manufacturingCategory")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.manufacturingCategory && <span className="text-red-400 text-xs mt-1 block">{errors.manufacturingCategory.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.products')} *
                  </label>
                  <input
                    {...register("typeOfProducts")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.typeOfProducts && <span className="text-red-400 text-xs mt-1 block">{errors.typeOfProducts.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.location')} *
                  </label>
                  <input
                    {...register("location")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.location && <span className="text-red-400 text-xs mt-1 block">{errors.location.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.machines')} *
                  </label>
                  <input
                    {...register("estimatedMachines")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.estimatedMachines && <span className="text-red-400 text-xs mt-1 block">{errors.estimatedMachines.message}</span>}
                </div>

                <div>
                  <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                    {t('contact.form.purpose')} *
                  </label>
                  <input
                    {...register("purposeOfContact")}
                    className="w-full glass-input px-4 py-3 rounded"
                    disabled={submitContact.isPending}
                  />
                  {errors.purposeOfContact && <span className="text-red-400 text-xs mt-1 block">{errors.purposeOfContact.message}</span>}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-display text-xs text-zinc-400 uppercase tracking-widest mb-2">
                {t('contact.form.message')} *
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full glass-input px-4 py-3 rounded resize-none"
                disabled={submitContact.isPending}
              />
              {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              disabled={submitContact.isPending}
              className="w-full md:w-auto px-12 py-4 bg-zinc-100 text-zinc-900 font-display text-sm uppercase tracking-widest font-medium rounded hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitContact.isPending ? t('contact.form.submitting') : t('contact.form.submit')}
            </button>
            
            {submitContact.isError && (
              <p className="mt-4 text-red-400 text-sm font-light">
                {submitContact.error?.message || "An error occurred during transmission."}
              </p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
