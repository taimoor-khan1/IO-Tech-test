"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { addSubmittedEmail, setIsSubmitting, clearLastSubmission } from "../../../lib/features/formSlice";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function Footer() {
  const dispatch = useDispatch();
  const t = useTranslations("footer");
  const { submittedEmails, isSubmitting, lastSubmission } = useSelector((state) => state.form);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'duplicate'

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const emailLower = values.email.toLowerCase();
      
      // Check for duplicate
      if (submittedEmails.includes(emailLower)) {
        setSubmitStatus("duplicate");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }

      dispatch(setIsSubmitting(true));
      setSubmitStatus(null);

      try {
        // Call Strapi API
        const { subscribeEmail } = await import("../../../lib/strapi");
        await subscribeEmail(emailLower);
        
        // Add to submitted emails
        dispatch(addSubmittedEmail(emailLower));
        setSubmitStatus("success");
        resetForm();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          dispatch(clearLastSubmission());
        }, 3000);
      } catch (error) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
      } finally {
        dispatch(setIsSubmitting(false));
      }
    },
  });

  return (
    <footer className="bg-[#4C2714] text-white px-4 py-10 font-sans mt-20">
      <div className="max-w-7xl mx-auto w-full py-6">
        <div className="flex flex-col lg:flex-row justify-end items-center gap-4 lg:gap-6 w-full">
          <form
            className="flex flex-col gap-1 p-2 bg-white rounded-md relative"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="bg-white text-black px-4 py-2 outline-none w-48 md:w-64"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#4C2714] rounded-md text-white px-8 py-2 hover:bg-white hover:text-[#4C2714] transition font-medium border-l border-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "..." : t("subscribe")}
              </button>
            </div>
            
            {/* Error Messages */}
            {formik.touched.email && formik.errors.email && (
              <div className="absolute -bottom-5 left-1 right-1 text-red-400 text-xs mt-1">
                {t("invalid")}
              </div>
            )}
            
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="absolute -bottom-5 left-1 right-1 text-green-400 text-xs mt-1">
                {t("success")}
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="absolute -bottom-5 left-1 right-1 text-red-400 text-xs mt-1">
                {t("error")}
              </div>
            )}
            
            {/* Duplicate Message */}
            {submitStatus === "duplicate" && (
              <div className="absolute -bottom-5 left-1 right-1 text-yellow-400 text-xs mt-1">
                {t("duplicate")}
              </div>
            )}
          </form>

          <span className="text-white">{t("contacts")}</span>
          <div className="flex items-center gap-4 text-white text-lg">
            {/* Social icons here */}
          </div>
        </div>

        <div className="border-t border-[#BFA89B] my-6"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-sm gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white flex-1">
            <span className="hover:underline cursor-pointer">{t("about")}</span>
            <span className="hover:underline cursor-pointer">{t("strategy")}</span>
            <span className="hover:underline cursor-pointer">{t("advantages")}</span>
            <span className="hover:underline cursor-pointer">{t("responsibility")}</span>
            <span className="hover:underline cursor-pointer">{t("services")}</span>
          </div>
          <div className="text-white md:ml-auto">{t("copyright")}</div>
        </div>
      </div>
    </footer>
  );
}
