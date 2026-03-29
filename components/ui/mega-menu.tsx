import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => {
          const Tag = navItem.link ? "a" : "span";
          const tagProps = navItem.link ? { href: navItem.link } : {};
          return (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            <Tag
              {...tagProps}
              className="relative flex cursor-pointer items-center justify-center gap-1 py-2 px-4 text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary group"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span className="relative z-10 font-medium">{navItem.label}</span>
              {navItem.subMenus && (
                <ChevronDown
                  className={`relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                    openMenu === navItem.label ? "rotate-180" : ""
                  }`}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-accent/10"
                  style={{
                    borderRadius: 10,
                  }}
                />
              )}
            </Tag>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-3 z-10">
                  <motion.div
                    className="w-max border border-border-light bg-white p-5 shadow-xl shadow-black/8"
                    style={{
                      borderRadius: 16,
                    }}
                    layoutId="menu"
                  >
                    <div className="flex w-fit shrink-0 space-x-10 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                            {sub.title}
                          </h3>
                          <ul className="space-y-5">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <a
                                    href={item.href || "/services"}
                                    className="flex items-start space-x-3 group"
                                  >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                                      <Icon className="h-5 w-5 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-semibold text-text-primary">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-text-muted transition-colors duration-200 group-hover:text-text-secondary mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        );
        })}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
