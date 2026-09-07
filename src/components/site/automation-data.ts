import {
  Inbox,
  PhoneMissed,
  Repeat,
  CalendarCheck,
  Database,
  FileText,
  Star,
  Headset,
  type LucideIcon,
} from "lucide-react";

export type AutomationItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const automations: AutomationItem[] = [
  {
    title: "Never Miss a Lead",
    body: "Automatically respond to new inquiries, qualify prospects, notify your team, and keep following up until the customer responds.",
    icon: Inbox,
  },
  {
    title: "Recover Missed Calls",
    body: "When you can't answer the phone, automatically text the caller and start a conversation.",
    icon: PhoneMissed,
  },
  {
    title: "Follow Up Automatically",
    body: "Turn abandoned leads into conversations with personalized follow-up sequences.",
    icon: Repeat,
  },
  {
    title: "Book Appointments",
    body: "Let customers schedule appointments without endless back-and-forth.",
    icon: CalendarCheck,
  },
  {
    title: "Keep Your CRM Updated",
    body: "Automatically create contacts, update records, assign leads, and create follow-up tasks.",
    icon: Database,
  },
  {
    title: "Process Paperwork",
    body: "Extract information from emails, forms, PDFs, and other documents and send it where it belongs.",
    icon: FileText,
  },
  {
    title: "Request Reviews",
    body: "Ask for a review at the right moment after a job and route unhappy replies to you first.",
    icon: Star,
  },
  {
    title: "Answer Common Questions",
    body: "An AI receptionist handles hours, pricing ranges, and scheduling questions around the clock.",
    icon: Headset,
  },
];
